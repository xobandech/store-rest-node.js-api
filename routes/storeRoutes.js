const express = require("express");

const router = express.Router();
const {
  getItemById,
  createItem,
  deleteItem,
  getItems,
  searchForItems,
  updateItem,
} = require("../controllers/storeController.js");

router.route("/api/v1/products").get(getItems).post(createItem);

router.route("/api/v1/products/:id").get(getItemById).delete(deleteItem).put(updateItem);

module.exports = router