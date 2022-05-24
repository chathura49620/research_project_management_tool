const mongoose = require("mongoose");

var GroupDetailschema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  specilization: {
    type: String,
    required: true,
  },
});

const studentGroupDetails = mongoose.model("studentGroupDDetails", GroupDetailschema);

module.exports = studentGroupDetails;