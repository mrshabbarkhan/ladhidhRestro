const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/Ladhidh Models/user.models");

const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});
  console.log(users); // This will print the users found in the database
  res.status(200).json(users); // Respond to the client with the user data
});

module.exports = {
  getAllUsers,
};
