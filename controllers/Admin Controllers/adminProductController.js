const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const crypto = require("crypto");

const cloudinary = require("cloudinary").v2;
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const expressAsyncHandler = require("express-async-handler");

const Product = require("../../models/Ladhidh Models/productModel");
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret, // Click 'View API Keys' above to copy your API secret
});
const getAllProducts = expressAsyncHandler(async (req, res) => {
  // Check User Using JWT

  //   const user = await User.findById(req.user._id.toString());

  //   if (!user) {
  //     res.status(404);
  //     throw new Error("User Not Exist");
  //   }

  //   Find products

  const Products = await Product.find({});

  if (!Products) {
    res.status(404);
    throw new Error("Products Not Found");
  }

  res.status(200).json(Products);
});

const getProductById = expressAsyncHandler(async (req, res) => {
  const { productId } = req.body; // Extract productId from request params
  console.log(productId);
  try {
    const product = await Product.findById(productId); // Find the product by its ID

    if (!product) {
      return res.status(404).json({ message: "Product not found" }); // If no product is found, return 404
    }

    res.status(200).json(product); // Return the product data in the response
  } catch (error) {
    console.error("Error fetching product:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
});

const createProduct = expressAsyncHandler(async (req, res) => {
  const { img, pack, title, code, price, discount, quantity, cat_id } =
    req.body;

  // Check if all required fields are provided
  if (!pack || !title || !price || !cat_id || !quantity) {
    res.status(400); // Use 400 for client errors
    throw new Error("Please fill in all required fields");
  }

  try {
    // Handle image upload
    const file = req.files?.img;
    let imgdata = null;

    if (file) {
      const result = await cloudinary.uploader.upload(file.tempFilePath);
      imgdata = result?.secure_url || result?.url;
    }

    const generateUniqueCode = () => crypto.randomBytes(4).toString("hex");
    const uniqueCode = code || generateUniqueCode();
    // Create product
    const product = await Product.create({
      img: imgdata,
      pack,
      title,
      code: uniqueCode,
      price,
      discount: discount || null, // Default to null if not provided
      cat_id,
      quantity,
    });

    if (!product) {
      res.status(400);
      throw new Error("Product not created");
    }

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message || "Failed to create product" });
  }
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  // Check User Using JWT
  // Uncomment and modify the following if user validation is needed
  /*
  const user = await User.findById(req.user._id.toString());
  if (!user) {
    res.status(404);
    throw new Error("User Not Exist");
  }
  */

  // Delete the product by ID
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    res.status(404); // Change to 404 Not Found if the product does not exist
    throw new Error("Product Not Found");
  }
  res.status(200).json({ message: "Product successfully deleted" });
});

const editProduct = expressAsyncHandler(async (req, res) => {
  try {
    // const { id } = req.params;
    const updateData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {
  editProduct,
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
