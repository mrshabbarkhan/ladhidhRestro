const expressAsyncHandler = require("express-async-handler");
const User = require("../models/Ladhidh Models/user.models");
const Product = require("../models/Ladhidh Models/productModel");
const jwt = require("jsonwebtoken");

const getAllProducts = expressAsyncHandler(async (req, res) => {
  // 1. Check if token is provided
  const token = req.headers.authorization?.split(" ")[1]; // Get token from 'Authorization' header

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, token missing");
  }

  try {
    // 2. Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token with the secret
    req.user = decoded; // Attach decoded user data to the request object

    // 3. Find Products linked to the authenticated user
    const products = await Product.find({ user: req.user._id }); // Securely find products

    // 4. Check if any products exist
    if (!products) {
      res.status(404);
      throw new Error("No products found");
    }

    // 5. Respond with the products
    res.status(200).json(products);
  } catch (error) {
    // Handle errors
    res.status(401);
    throw new Error("Not authorized, invalid token");
  }
});

const getSingleProduct = expressAsyncHandler(async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from 'Authorization' header
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, token missing");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token with the secret
    req.user = decoded; // Attach decoded user data to the request object
    const { id } = req.params;
    const product = await Product.findOne({ _id: id, user: req.user._id }); // Securely find the product
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(401);
    throw new Error("Not authorized, invalid token or product not found");
  }
});

// const createProduct = expressAsyncHandler(async (req, res) => {
//   const { car, registration, description } = req.body;

//   if (!car || !description || !registration) {
//     res.status(401);
//     throw new Error("Please Fill All Details");
//   }

//   // Check User Using JWT

//   const user = await User.findById(req.user._id.toString());

//   if (!user) {
//     res.status(404);
//     throw new Error("User Not Exist");
//   }

//   const complaint = await Car.create({
//     user: req.user._id,
//     car: car.toLowerCase(),
//     registration,
//     description: description,
//     status: "open",
//   });

//   if (!complaint) {
//     res.status(400);
//     throw new Error("Complaint Not Raised");
//   }

//   res.status(201).json(complaint);
// });

// const deleteProduct = expressAsyncHandler(async (req, res) => {
//   // Check User Using JWT

//   const user = await User.findById(req.user._id.toString());

//   if (!user) {
//     res.status(404);
//     throw new Error("User Not Exist");
//   }

//   const updatedComplaint = await Car.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
//   );

//   if (!updatedComplaint) {
//     res.status(400);
//     throw new Error("Complaint Not Raised");
//   }

//   res.status(201).json(updatedComplaint);
// });

module.exports = {
  getAllProducts,
  getSingleProduct,
};
