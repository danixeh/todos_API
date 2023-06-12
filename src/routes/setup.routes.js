//import express route
const { Router } = require("express");
// here we use the validators and authenticators
const authenticate = require("../middlewares/auth.middleware");
const { hasRoles } = require("../middlewares/role.middleware");
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
  getPostByCategories,
  getPostWithAnswer,
  validateEmail,
  createRol,
  getAllRoles,
  createProduct,
  updateProduct,
  getAllProducts,
} = require("../controllers/setup.controllers");

const { categoriesValidation } = require("../validators/categories.validators");
const { createAnswerValidator } = require("../validators/answer.validator");
const createAnswer = require("../controllers/answers.controllers");

// create a router instance

const router = Router();

// create category
router.post("/posts", authenticate, createPost);

// create category
router.post("/rol", createRol);

// create category
router.get("/posts/category/:categoryId", getPostByCategories);

router.get("/posts/:id/answers", getPostWithAnswer);
// create todo

router.post("/todos", createTodos);

// create category
router.post(
  "/categories",
  authenticate,
  hasRoles(3),
  categoriesValidation,
  createCategory
);

// create user
router.post("/users", createUser);

// create user
router.post("/product", createProduct);

// create user
router.get("/products", getAllProducts);

//Update todo
router.put("/product/:id", updateProduct);

// create user
router.get("/rol", getAllRoles);

// create user
router.post("/email-validate", validateEmail);

// create user
router.post("/login", loginUserValidation, login);

router.post("/Answers", authenticate, createAnswerValidator, createAnswer);

module.exports = router;
