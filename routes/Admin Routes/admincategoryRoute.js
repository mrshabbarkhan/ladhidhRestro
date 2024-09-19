const express = require("express");
const {
  createCategory,
  getAllCategory,
  deleteCategory,
  editCategory,
} = require("../../controllers/Admin Controllers/categoryController");

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", editCategory);

module.exports = router;
