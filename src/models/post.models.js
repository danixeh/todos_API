const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Post = db.define(
  "post",
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT(30),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: "category_id",
      allowNull: false,
    },
  },
  {
    timestamps: true,
    deletedAt: false,
    updatedAt: false,
    createdAt: "created_at",
  }
);

module.exports = Post;
