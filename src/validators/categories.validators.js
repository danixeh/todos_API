// it will help us to validate
const { check } = require("express-validator");
const validateResult = require("../utils/validate.js");

const categoriesValidation = [
  check("category", "error category field")
    .exists()
    .withMessage("is not sending category")
    .notEmpty()
    .withMessage("category should not be empty")
    .isString()
    .withMessage("category have to be a String"),

  check("description", "error mail field")
    .exists()
    .withMessage("is not sending description")
    .notEmpty()
    .withMessage("description should not be empty")
    .isString()
    .withMessage("description have to be a String"),
  validateResult,
];

module.exports = { categoriesValidation };
