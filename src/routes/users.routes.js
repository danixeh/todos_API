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
} = require("../controllers/users.controllers");

// create a router instance

const router = Router();

// all todos
router.get("/api/v1/todos", getAllTodos);

// all todos
router.get("/api/v1/categories", getAllCategories);

// all users
router.get("/api/v1/posts", getAllPosts);

// all users
router.get("/api/v1/answers", getAllAnswers);

// all users
router.get("/api/v1/users", getAllUsers);

// obtain by todo by id
router.get("/api/v1/todos/:id", getTodosById);

// obtain by posts by id
router.get("/api/v1/posts/:id", getPostsById);

// create category
router.post("/api/v1/categories", createCategory);

// create todo
router.post("/api/v1/todos", createTodos);

// create user
router.post("/api/v1/users", createUser);

// Delete todo
router.delete("/api/v1/todos/:id", deleteTodos);

//Update todo
router.put("/api/v1/todos/:id", updateTodos);

module.exports = router;
