const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const Users = require("../models/users.models");

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

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    next(error);
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
    // extract request body
    const newUser = req.body;
    // insert into users = Todos.create
    await Users.create(newUser);
    // at the end we answer 201 state
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
  getTodosById,
  createTodos,
  deleteTodos,
  updateTodos,
  getAllUsers,
  createUser,
  createCategory,
  getAllCategories,
};
