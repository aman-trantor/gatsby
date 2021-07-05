const mongoose = require("mongoose");

const UserSchema = {
  name: { type: "String", min: "3", required: true },
  email: { type: "String", required: true },
  password: { type: "String", min: "6", required: true },
};

const User = mongoose.model("Users", new mongoose.Schema(UserSchema));

module.exports = User;
