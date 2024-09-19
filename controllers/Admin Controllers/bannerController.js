const expressAsyncHandler = require("express-async-handler");
const Banner = require("../../models/Ladhidh Models/bannerModel");

const getAllBanners = expressAsyncHandler(async (req, res) => {
  const Banners = await Banner.find({});
  console.log(Banners); // This will print the users found in the database
  res.status(200).json(Banners); // Respond to the client with the user data
});
const deleteBanner = expressAsyncHandler(async (req, res) => {
  const dBanner = await Banner.findByIdAndDelete(req.params.id);
  if (!dBanner) {
    res.status(404); // Change to 404 Not Found if the product does not exist
    throw new Error("Product Not Found");
  }
  res.status(200).json({ message: "Product successfully deleted" });
});

module.exports = {
  getAllBanners,
  deleteBanner,
};
