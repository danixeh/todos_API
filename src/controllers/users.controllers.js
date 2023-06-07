const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const Users = require("../models/users.models");
const Posts = require("../models/post.models");
const Answers = require("../models/answers.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todos.findAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const todos = await Categories.findAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const getAllAnswers = async (req, res, next) => {
  try {
    const answers = await Answers.findAll();
    res.json(answers);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Posts.findByPk(id, {
      exclude: ["userId"],
      include: [
        {
          model: Users,
          attributes: ["id", "username"],
        },
        {
          model: Categories,
          attributes: ["id", "name_category"],
        },
        {
          model: Answers,
          include: [
            {
              model: Users,
              attributes: ["id", "username"],
            },
          ],
        },
      ],
    });
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};
const getTodosById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByPk(id, {
      include: {
        model: Categories,
      },
    });
    res.json(todo);
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

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (typeof username != "string" || !username) {
      return res.status(400).json({
        error: "Invalid username",
        message: "Username cannot be null or empty",
      });
    }
    if (typeof email != "string" || !email) {
      return res.status(400).json({
        error: "Invalid mail",
        message: "email cannot be null or empty",
      });
    }
    if (typeof password != "string" || !password) {
      return res.status(400).json({
        error: "Invalid password",
        message: "passsword cannot be null or empty",
      });
    }

    //we have to hash password
    const hashed = await bcrypt.hash(password, 10);
    // we create the user
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

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    await Todos.update({ completed }, { where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

// export controllers

module.exports = {
  getAllTodos,
  getAllCategories,
  getAllAnswers,
  getAllUsers,
  getAllPosts,
  getPostsById,
  getTodosById,
  createTodos,
  createUser,
  createCategory,
  deleteTodos,
  updateTodos,
};
