const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Fill Email"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
    },
    number: {
      type: String,
      required: [true, "Please Enter Your Valid Mobile Number"],
    },
    Addres: {
      type: String,
      required: [true, "Please Enter Your Address"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
