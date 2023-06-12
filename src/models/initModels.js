const Roles = require("../models/roles.models");
const Car = require("../models/car.models");
const Order = require("../models/order.models");
const Users = require("../models/users.models");
const Product = require("../models/product.models");
const ProductInCart = require("../models/productInCart.models");
const ProductInOrder = require("../models/productInOrder.models");
// ------------------------
const Categories = require("../models/categories.models");
const Todos = require("../models/todos.models");

const Answers = require("../models/answers.models");
const Post = require("./post.models");

const initModels = () => {
  Users.hasOne(Car, { foreignKey: "userId" });
  Car.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Product, { foreignKey: "userId" });
  Product.belongsTo(Users, { foreignKey: "userId" });

  Car.hasMany(ProductInCart, { foreignKey: "carId" });
  ProductInCart.belongsTo(Car, { foreignKey: "carId" });

  Product.hasMany(ProductInCart, { foreignKey: "productId" });
  ProductInCart.belongsTo(Product, { foreignKey: "productId" });

  Product.hasMany(ProductInOrder, { foreignKey: "productId" });
  ProductInOrder.belongsTo(Product, { foreignKey: "productId" });

  Order.hasMany(ProductInOrder, { foreignKey: "orderId" });
  ProductInOrder.belongsTo(Order, { foreignKey: "orderId" });

  Roles.hasMany(Users, { foreignKey: "rolId" });
  Users.belongsTo(Roles, { foreignKey: "rolId" });
  // -------------------------------------------

  Users.hasMany(Todos, { foreignKey: "userId" });
  Todos.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Answers, { foreignKey: "userId" });
  Answers.belongsTo(Users, { foreignKey: "userId" });

  Post.hasMany(Answers, { foreignKey: "postId" });
  Answers.belongsTo(Post, { foreignKey: "postId" });

  Users.hasMany(Post, { foreignKey: "userId" });
  Post.belongsTo(Users, { foreignKey: "userId" });

  Categories.hasMany(Post, { foreignKey: "categoryId" });
  Post.belongsTo(Categories, { foreignKey: "categoryId" });

  // Categories.hasMany(Post, { foreignKey: "categoryId" });
  // Post.belongsTo(Categories, { foreignKey: "categoryId" });
};

module.exports = initModels;
