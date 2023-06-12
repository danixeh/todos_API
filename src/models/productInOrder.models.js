const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Productinorder = db.define(
  "product_in_order",
  {
    //id, title, description, completed
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      field: "order_id",
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      field: "product_id",
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.INTEGER,
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

module.exports = Productinorder;
