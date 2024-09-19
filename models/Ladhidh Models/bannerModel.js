const { mongoose } = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    Img: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", bannerSchema);
