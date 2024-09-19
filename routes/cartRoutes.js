const express = require("express");
const {
  addToCart,
  getCartItems,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware"); // Assuming you have an auth middleware

const router = express.Router();
router.route("/").post(protect, addToCart).get(protect, getCartItems);
router.route("/update").put(protect, updateCartItem);
router.route("/removeAll").delete(protect, clearCart);
router.route("/remove").delete(protect, removeFromCart);

module.exports = router;
