const mongoose = require("mongoose");

var GroupDetailschema = new mongoose.Schema({
  studentID: {
    type: String,
    required: false,
  },
  studentName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  specilization: {
    type: String,
    required: false,
  },
});

const studentGroupDetails = mongoose.model("studentGroupDDetails", GroupDetailschema);

module.exports = studentGroupDetails;