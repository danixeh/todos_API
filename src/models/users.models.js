const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Users = db.define(
  "users",
  {
    //id, title, description, completed
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "image",
    },
    rolId: {
      type: DataTypes.INTEGER,
      field: "rol_id",
      defaultValue: 1,
      allowNull: false,
    },
    validUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "valid_user",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
