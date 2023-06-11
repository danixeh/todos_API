const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Car = db.define(
  "car",
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
    totalPrice: {
      type: DataTypes.INTEGER,
      field: "total_price",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Car;
