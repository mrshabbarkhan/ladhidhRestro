const express = require("express");
const {
  getAllUsers,
} = require("../../controllers/Admin Controllers/adminControl");

const router = express.Router();

router.post("/users", getAllUsers);

module.exports = router;
