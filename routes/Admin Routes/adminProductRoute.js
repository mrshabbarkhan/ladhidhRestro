const express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  editProduct,
} = require("../../controllers/Admin Controllers/adminProductController");

const Router = express.Router();
Router.get("/", getAllProducts);
Router.get("/:id", getProductById);
Router.post("/", createProduct);
Router.delete("/:id", deleteProduct);
Router.put("/:id", editProduct);

module.exports = Router;
