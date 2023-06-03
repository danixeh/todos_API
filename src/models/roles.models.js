const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Roles = db.define(
  "roles",
  {
    //id, title, description, completed
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
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

module.exports = Roles;
