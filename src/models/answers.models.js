const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Answers = db.define(
  "answers",
  {
    //id, title, description, completed
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
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

module.exports = Answers;

// INSERT INTO posts (title, description, user_id, category_id, created_at) VALUES ('hi', 'hi guys my name is nathan', 1, 1 , CURRENT_TIMESTAMP(0));
