const mongoose = require("mongoose");

var Messageschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  messagedesc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const supervisorMessageDetails = mongoose.model("messageDetails", Messageschema);

module.exports = supervisorMessageDetails;
