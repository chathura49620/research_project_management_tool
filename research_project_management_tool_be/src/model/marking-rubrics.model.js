const mongoose = require("mongoose");

var Topicschema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  rublicName: {
    type: String,
    required: true,
  },
  rublicPdfFile: {
    type: String,
    required: true,
  },
});

const markingRubricDetails = mongoose.model("markingRublicDetails", Topicschema);

module.exports = markingRubricDetails;
