const Categories = require("../models/categories.models");
const Todos = require("../models/todos.models");
const Users = require("../models/users.models");

const initModels = () => {
  Users.hasMany(Todos, { foreignKey: "userId" });
  Todos.belongsTo(Users, { foreignKey: "userId" });
  Categories.hasMany(Todos, { foreignKey: "categoryId" });
  Todos.belongsTo(Categories, { foreignKey: "categoryId" });
};

module.exports = initModels;
