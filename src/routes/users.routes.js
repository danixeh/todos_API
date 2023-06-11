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
  getAllCategories,
  getPostsById,
  getAllPosts,
  getAllAnswers,
  login,
  deleteUser,
} = require("../controllers/users.controllers");

// create a router instance

const router = Router();

// all todos
router.get("/todos", getAllTodos);

// all posts
router.get("/posts", getAllPosts);

// all users
router.get("/answers", getAllAnswers);

// all users
router.get("/users", getAllUsers);

// obtain by todo by id
router.get("/todos/:id", getTodosById);

// obtain by posts by id
router.get("/posts/:id", getPostsById);

// Delete todo
router.delete("/todos/:id", deleteTodos);

// Delete todo
router.delete("/User/:id", deleteUser);

//Update todo
router.put("/todos/:id", updateTodos);

module.exports = router;
