//import express route

const { Router } = require("express");

const {
  getAllTodos,
  getTodosById,
  createTodos,
  deleteTodos,
  updateTodos,
  getAllUsers,
  createUser,
  createCategory,
} = require("../controllers/users.controllers");

// create a router instance

const router = Router();

// all todos
router.get("/api/v1/todos", getAllTodos);

// all users
router.get("/api/v1/users", getAllUsers);

// obtain by todo by id
router.get("/api/v1/todos/:id", getTodosById);

// create category
router.post("/api/v1/category", createCategory);

// create todo
router.post("/api/v1/todos", createTodos);

// create user
router.post("/api/v1/users", createUser);

// Delete todo
router.delete("/api/v1/todos/:id", deleteTodos);

//Update todo
router.put("/api/v1/todos/:id", updateTodos);

module.exports = router;
