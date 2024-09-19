const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret, // Click 'View API Keys' above to copy your API secret
});

const expressAsyncHandler = require("express-async-handler");
// const User = require("../models/Ladhidh Models/user.models");
const Category = require("../../models/Ladhidh Models/categories.models");

// const getAllProducts = expressAsyncHandler(async (req, res) => {
//   // Check User Using JWT

//   const user = await User.findById(req.user._id.toString());

//   if (!user) {
//     res.status(404);
//     throw new Error("User Not Exist");
//   }

//   //   Find Complaints

//   const complaints = await Product.find({ user: user._id });

//   if (!complaints) {
//     res.status(404);
//     throw new Error("Complaints Not Found");
//   }

//   res.status(200).json(complaints);
// });

// const getProduct = expressAsyncHandler(async (req, res) => {
//   // Check User Using JWT

//   const user = await User.findById(req.user._id.toString());

//   if (!user) {
//     res.status(404);
//     throw new Error("User Not Exist");
//   }

//   //   Find Complaints

//   const complaint = await Car.findById(req.params.id);

//   if (complaint) {
//     res.status(200).json(complaint);
//   }

//   res.status(404);
//   throw new Error("Complaint Not Found");
// });

const createCategory = expressAsyncHandler(async (req, res) => {
  const { cat_id, name, img } = req.body;

  if (!cat_id || !name) {
    res.status(401);
    throw new Error("Please Fill All Details");
  }

  // Check User Using JWT

  //   const user = await User.findById(req.user._id.toString());

  //   if (!user) {
  //     res.status(404);
  //     throw new Error("User Not Exist");
  //   }

  const file = req.files.img;
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    let imgdata = result?.secure_url || url;

    try {
      const categories = await Category.create({
        img: imgdata,
        name: name,
        cat_id: cat_id,
      });
      if (!categories) {
        res.status(400);
        throw new Error("categories not created ");
      }
      res.status(201).json(categories);
    } catch (error) {
      res.status(500).json(error ? error.errmsg : error);
    }
  });
});

const getAllCategory = expressAsyncHandler(async (req, res) => {
  const Categories = await Category.find({});
  if (!Categories) {
    throw new Error("Product Not Found");
  } else {
    res.status(200).json(Categories);
  }
});

const deleteCategory = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findByIdAndDelete(id);
  if (!category) {
    throw new Error("Category Not Found");
  }
  res.status(200).json({ message: "Category Deleted" });
});

const editCategory = expressAsyncHandler(async (req, res) => {
  const file = req.files.img;
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    let imgdata = result?.secure_url || result?.url;
    let { name } = req.body;
    try {
      // const { id } = req.params;
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        { name: name, img: imgdata },
        { new: true, runValidators: true }
      );
      if (!updatedCategory) {
        res.status(404);
        throw new Error("Product not found");
      }
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

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
  createCategory,
  getAllCategory,
  deleteCategory,
  editCategory,
};
