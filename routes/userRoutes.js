const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  privateController,
  deleteUser,
  editUser,
} = require("../controllers/userController");
const {
  editProduct,
} = require("../controllers/Admin Controllers/adminProductController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/private", protect, privateController);
router.delete("/:id", protect, deleteUser);
router.put("/:id", protect, editUser);
router.get("/login", (req, res) => {
  // Public
  res.send("login api make a post req");
});

module.exports = router;
