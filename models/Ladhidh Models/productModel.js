const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Please Upload Image"],
      validate: {
        validator: function (v) {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(v); // Ensures it's a valid image URL
        },
        message: (props) => `${props.value} is not a valid image URL!`,
      },
    },
    pack: {
      type: String,
      required: [true, "Please Input Pack"],
      minlength: [2, "Pack name must be at least 2 characters long"],
    },
    title: {
      type: String,
      required: [true, "Please input title field"],
      minlength: [2, "Title must be at least 2 characters long"],
    },
    code: {
      type: String,
      required: false,
      unique: false,
      default: null,
    },

    price: {
      type: Number,
      required: [true, "Please input Price"],
      min: [0, "Price must be a positive number"],
      trim: true,
    },
    discount: {
      type: Number, // Changed to Number to represent percentage
      required: false, // Discount is optional
      default: null, // If not provided, it will be null
      min: [0, "Discount must be at least 0"],
      max: [100, "Discount cannot be more than 100"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    cat_id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number, // Changed to Number for arithmetic purposes
      required: [true, "Please input Quantity"],
      default: 1,
      min: [1, "Quantity cannot be less than 1"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  }
);

module.exports = mongoose.model("Product", productSchema);
