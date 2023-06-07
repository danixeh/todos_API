//import express route

const { Router } = require("express");
// here we use the validators and authenticators
const authenticate = require("../middlewares/auth.middleware");
const {
  createUserValidation,
  loginUserValidation,
} = require("../validators/user.validators");
const {
  createPost,
  createTodos,
  createUser,
  createCategory,
  login,
} = require("../controllers/post.controllers");

// create a router instance

const router = Router();

// create category
router.post("/api/v1/post", authenticate, createPost);

// create todo
router.post("/api/v1/todos", createTodos);

// create category
router.post("/api/v1/categories", createCategory);

// create user
router.post("/api/v1/users", createUserValidation, createUser);

// create user
router.post("/api/v1/login", loginUserValidation, login);

module.exports = router;
