const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const Banner = require("../../models/Ladhidh Models/bannerModel");
const {
  getAllBanners,
  deleteBanner,
} = require("../../controllers/Admin Controllers/bannerController");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dok5jmm9x",
  api_key: "766366461858654",
  api_secret: "_2415cExOn2hex7KRztFf6Ha3yU", // Click 'View API Keys' above to copy your API secret
});
const router = express.Router();
router.get("/", getAllBanners);
router.post("/upload", (req, res, next) => {
  const file = req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    try {
      const newImage = new Banner({
        Img: result.url,
      });
      await newImage.save();
      // Respond with the image URL and other relevant data
      res.status(200).json({
        message: "Image uploaded successfully",
        imgUrl: result.url,
      });
    } catch (saveErr) {
      res.status(500).json({ error: "Failed to save image URL to database" });
    }
  });
});
router.delete("/:id", deleteBanner);

module.exports = router;
