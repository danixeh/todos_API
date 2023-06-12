//import express route

const { Router } = require("express");

const {
  createOrder,
  deleteUser,
  getAllOrders,
  getAllUsers,
  updateUser,
  getUserById,
  updateUserVerify,
  getUserOrdersById,
  getUserProductsById,
} = require("../controllers/users.controllers");
const router = Router();
router.delete("/User/:id", deleteUser);
router.get("/orders", getAllOrders);
router.get("/User/:id", getUserById);
router.get("/User/:id/orders", getUserOrdersById);
router.get("/User/:id/products", getUserProductsById);
router.get("/users", getAllUsers);
router.post("/order", createOrder);
router.put("/users/:id", updateUser);
router.put("/usersverify/:id", updateUserVerify);
module.exports = router;
