const db = require("../utils/database"); // bring the database
const { DataTypes } = require("sequelize"); //in order to handle the Types meaning with sql language

const Product = db.define(
  "product",
  {
    //id, title, description, completed
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    availableQty: {
      type: DataTypes.BOOLEAN,
      field: "available_qty",
      defaultValue: true,
    },
    status: {
      type: DataTypes.ENUM("purchased", "notPurchased"),
      defaultValue: "notPurchased",
    },
    image: {
      type: DataTypes.STRING,
      field: "product_image",
      defaultValue: "image",
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;

// insert into products(name, description, price, available_qty, status, product_image, user_id)
// values('banana', 'banan bag 1kg', 4.99, true, false, 'image', 1);
