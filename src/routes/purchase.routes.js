const { Router } = require("express");
const {
  findAllCategories,
  addProductsToOrder,
} = require("../controllers/purchase.controllers");
const router = Router();

router.get("/categories", findAllCategories);

router.get("/categories", addProductsToOrder);

module.exports = router;
