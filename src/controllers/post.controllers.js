const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const Users = require("../models/users.models");
const Posts = require("../models/post.models");
const Answers = require("../models/answers.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
  try {
    // extract request body
    const newPost = req.body;
    // insert into users = Todos.create
    await Posts.create(newPost);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
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

const createUser = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(password, 10);
    await Users.create({
      username,
      email,
      password: hashed,
    });
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const createCategory = async (req, res) => {
  try {
    // extract request body
    const newCategory = req.body;
    // insert into users = Todos.create
    await Categories.create(newCategory);
    // at the end we answer 201 state
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
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
        name: "invalid username",
        message: "Email does not exist",
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
    const { firstname, lastname, id, username, roleId } = user;

    const userData = { firstname, lastname, id, username, email, roleId };

    const token = jwt.sign(userData, "unodostres", {
      algorithm: "HS512",
      expiresIn: "5m",
    });

    userData.token = token;

    res.status(201).json(userData);

    // afterwards we need to acces to the key token user
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createPost,
  createTodos,
  createUser,
  createCategory,
  login,
};
