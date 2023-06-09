const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Categories = db.define(
  "categories",
  {
    name_category: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
