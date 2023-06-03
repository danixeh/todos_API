const Categories = require("../models/categories.models");
const Todos = require("../models/todos.models");
const Users = require("../models/users.models");
const Answers = require("../models/answers.models");
const Post = require("../models/post.models");
const Roles = require("../models/roles.models");

const initModels = () => {
  Users.hasMany(Todos, { foreignKey: "userId" });
  Todos.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Answers, { foreignKey: "userId" });
  Answers.belongsTo(Users, { foreignKey: "userId" });

  Post.hasMany(Answers, { foreignKey: "postId" });
  Answers.belongsTo(Post, { foreignKey: "postId" });

  Users.hasMany(Post, { foreignKey: "userId" });
  Post.belongsTo(Users, { foreignKey: "userId" });

  Roles.hasMany(Users, { foreignKey: "rolId" });
  Users.belongsTo(Roles, { foreignKey: "rolId" });

  Categories.hasMany(Post, { foreignKey: "categoryId" });
  Post.belongsTo(Categories, { foreignKey: "categoryId" });
};

module.exports = initModels;
