2;
const Answers = require("../models/answers.controllers.json");

const createAnswuers = async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(400).json(error);
  }
};

const dd = async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = createAnswuers;
