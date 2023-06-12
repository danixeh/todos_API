const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const Users = require("../models/users.models");
const Posts = require("../models/post.models");
const Answers = require("../models/answers.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { post } = require("../routes/purchase.routes");
const { sendWelcomeMail } = require("../utils/sendMails");
const Roles = require("../models/roles.models");
const Products = require("../models/product.models");
require("dotenv").config();

const createPost = async (req, res, next) => {
  try {
    // extract request body
    const newPost = req.body;

    // insert into users = Todos.create
    await Posts.create(newPost);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getAllRoles = async (req, res, next) => {
  try {
    const todos = await Roles.findAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getPostByCategories = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const posts = await Posts.findAll({
      where: { categoryId },
      attributes: {
        exclude: ["description", "categoryId"],
      },
      include: {
        model: Users,
        attributes: ["username", "id"],
      },
    });
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostWithAnswer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Posts.findByPk(id, {
      attributes: {
        exclude: ["categoryId", "userId"],
      },
      include: [
        {
          model: Users,
          // as: "createdBy",
          attributes: ["id", "username"],
        },
        {
          model: Answers,
          attributes: ["content", "created_at"],
          include: {
            model: Users,
            attributes: ["username", "id"],
          },
        },
      ],
    });
    res.json(post);
  } catch (error) {
    next(error);
  }
};

const createTodos = async (req, res) => {
  try {
    // extract request body
    const newTodo = req.body;
    // insert into users = Todos.create
    await Todos.create(newTodo);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const createRol = async (req, res) => {
  try {
    // extract request body
    const newRol = req.body;
    // insert into users = Todos.create
    await Roles.create(newRol);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await Products.update({ description }, { where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await Users.create({
      username,
      email,
      password: hashed,
    });

    // from here it is not going to execute if there is an error

    res.status(201).send();
    // we need to create a token in order to identify the user across the mail token key verification
    const verifyToken = jwt.sign(
      { username, email },
      process.env.JWT_SECRET_EMAIL_VALIDATION,
      {
        algorithm: "HS512",
        expiresIn: "48h",
      }
    );

    sendWelcomeMail(email, { username, verifyToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { category, description } = req.body;
    await Categories.create({ category, description });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, available_qty, userId } = req.body;
    await Products.create({ name, description, price, available_qty, userId });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const validateEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_EMAIL_VALIDATION, {
      algorithms: "HS512",
    });

    if (!decoded) {
      next({
        status: 400,
        name: "error verification",
        message: "token is incorrect",
      });
    }

    await Users.update(
      { validUser: true },
      {
        where: { email: decoded.email },
      }
    );
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

// we create a login in order to return the user info and be sure the uer exist
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // const user to find the correct mail
    const user = await Users.findOne({
      where: { email },
    });
    // is there is user the will not be going to execute the same will happen with password
    if (!user) {
      return next({
        status: 400,
        name: "invalid email",
        message: "Email does not exist",
      });
    }
    if (!user.validUser) {
      return next({
        status: 400,
        name: "invalid email",
        message: "make sure your mail is Email verified",
      });
    }
    // commpare the passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "password is incorrect",
      });
    }
    // at the end we answer 201 state
    const { firstname, lastname, id, username, rolId } = user;

    const userData = { firstname, lastname, id, username, email, rolId };
    // here we create a token
    const token = jwt.sign(userData, process.env.JWT_SECRET_EMAIL_LOGIN, {
      algorithm: "HS512",
      expiresIn: "5m",
    });

    userData.token = token;

    res.status(201).json(userData);

    // afterwards we need to acces to the key token user
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  createTodos,
  createUser,
  createCategory,
  login,
  getPostByCategories,
  getPostWithAnswer,
  validateEmail,
  createRol,
  getAllRoles,
  createProduct,
  updateProduct,
  getAllProducts,
};
