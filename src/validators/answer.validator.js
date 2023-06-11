// it will help us to validate
const { check } = require("express-validator");
const validateResult = require("../utils/validate.js");

const createAnswerValidator = [
  check("content", "error content")
    .exists()
    .withMessage("is not sending content")
    .notEmpty()
    .withMessage("content should not be empty"),
  check("userId", "error userId")
    .exists()
    .withMessage("is not sending userId")
    .notEmpty()
    .withMessage("userId should not be empty")
    .isInt()
    .withMessage("userId have to be a String"),
  validateResult,
];

module.exports = { createAnswerValidator };
