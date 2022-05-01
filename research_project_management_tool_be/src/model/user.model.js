const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    age: { type: String, required: true },
    password: { type: String, required: true },
    type: {type: String, required: true},
   
  },
  { timestamps: true }
);

const User = mongoose.model("User", user);
module.exports = User;
