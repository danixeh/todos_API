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
    firstname: {
      type: DataTypes.STRING(30),
    },
    lastname: {
      type: DataTypes.STRING(30),
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    rolId: {
      type: DataTypes.INTEGER,
      field: "rol_id",
      allowNull: false,
    },
    password: {
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
  },
  {
    timestamps: false,
  }
);

module.exports = Users;
