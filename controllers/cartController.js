const mongoose = require("mongoose");
const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/Ladhidh Models/cartModel");
const Product = require("../models/Ladhidh Models/productModel");

const addToCart = expressAsyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id; // Authenticated user ID

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  // Check if the product exists
  const productdata = await Product.findById(productId);
  if (!productdata) {
    return res.status(404).json({ message: "Product not found" });
  }

  const cart = await Cart.findOne({ user: userId });

  if (cart) {
    // Check if the product is already in the cart
    const productIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      // If product exists, update its quantity
      cart.cartItems[productIndex].quantity += quantity;
    } else {
      // If product doesn't exist, add it to the cart
      cart.cartItems.push({ product: productId, quantity });
    }

    await cart.save();
  } else {
    // Create a new cart if one doesn't exist
    await Cart.create({
      user: userId,
      cartItems: [{ productdata, quantity }],
    });
  }

  // Retrieve the updated cart with full product details
  const updatedCart = await Cart.findOne({ user: userId }).populate({
    path: "cartItems.product", // populate product details
    select: "title price pack img", // select desired fields
  });

  res.status(200).json({
    message: "Product added to cart",
    cart: updatedCart,
  });
});

const getCartItems = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const cart = await Cart.findOne({ user: userId }).populate(
    "cartItems.product",
    "title price img pack code discount cat_id quantity"
  ); // Populate product info

  if (!cart) {
    res.status(404);
    throw new Error("Cart is empty");
  }

  res.status(200).json(cart.cartItems);
});
const updateCartItem = expressAsyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  const cart = await Cart.findOne({ user: userId });

  if (cart) {
    const productIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      cart.cartItems[productIndex].quantity = quantity;
      await cart.save();
      res.status(200).json({ message: "Cart updated successfully" });
    } else {
      res.status(404);
      throw new Error("Product not found in cart");
    }
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});
const removeFromCart = expressAsyncHandler(async (req, res) => {
  const { productId } = req.body; // Correctly extract productId from req.params
  console.log("Product ID:", productId); // Log the productId for debugging

  const userId = req.user._id; // Get the user's ID from the request object

  try {
    const cart = await Cart.findOne({ user: userId }); // Find the cart for the user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" }); // If no cart exists, return a 404 error
    }

    // Filter out the item with the specified productId from the cartItems array
    const updatedCartItems = cart.cartItems.filter(
      (item) => item.product.toString() !== productId
    );

    // Check if the item existed in the cart before filtering
    if (updatedCartItems.length === cart.cartItems.length) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.cartItems = updatedCartItems; // Update the cart's items
    await cart.save(); // Save the updated cart

    res.status(200).json({ message: "Product removed from cart" }); // Send success response
  } catch (error) {
    console.error("Error removing product from cart:", error);
    res
      .status(500)
      .json({ message: "Failed to remove product", error: error.message });
  }
});

const clearCart = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  console.log("User ID:", userId); // Log the userId

  try {
    const cart = await Cart.findOne({ user: userId });
    console.log("Cart found:", cart); // Log the cart object

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    if (!Array.isArray(cart.cartItems)) {
      console.error("Cart items is not an array");
      return res.status(500).json({ message: "Cart items format error" });
    }

    if (cart.cartItems.length === 0) {
      return res.status(200).json({ message: "Cart is already empty" });
    }

    cart.cartItems = [];
    await cart.save();

    return res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res
      .status(500)
      .json({ message: "Failed to clear cart", error: error.message });
  }
});

module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  removeFromCart,
  clearCart,
};
