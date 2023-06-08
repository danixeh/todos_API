// it will help us to validate
const { check } = require("express-validator");
const validateResult = require("../utils/validate.js");

const createUserValidation = [
  check("username", "error username field")
    .exists()
    .withMessage("is not sending username")
    .notEmpty()
    .withMessage("username should not be empty")
    .isString()
    .withMessage("username have to be a String")
    .isLength({ min: "3", max: "30" })
    .withMessage(
      "username have to have minimum 3 characters and maximum 30 characters"
    ),
  check("email", "error mail field")
    .exists()
    .withMessage("is not sending email")
    .notEmpty()
    .withMessage("email should not be empty")
    .isString()
    .withMessage("email have to be a String")
    .isEmail()
    .withMessage("email have to be a email")
    .isLength({ min: "4", max: "50" })
    .withMessage(
      "this have to have minimum 4 characters and maximum 50 characters"
    ),

  validateResult,
];

const loginUserValidation = [
  check("email", "error with email")
    .exists()
    .withMessage("is not sending email")
    .notEmpty()
    .withMessage("it should not be empty")
    .isEmail()
    .withMessage("it have to be a email")
    .isLength({ min: "5", max: "50" })
    .withMessage(
      "this have to have minimum 5 characters and maximum 50 characters"
    ),
  check("password", "error with pass")
    .exists()
    .withMessage("is not sending pass")
    .isString()
    .withMessage("pass have to be a String")
    .notEmpty()
    .withMessage("pass should not be empty")
    .isLength({ min: "4", max: "50" })
    .withMessage(
      "this have to have minimum 4 characters and maximum 50 characters"
    ),
  validateResult,
];

module.exports = { createUserValidation, loginUserValidation };
