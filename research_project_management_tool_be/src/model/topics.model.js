const mongoose = require("mongoose");

var Topicschema = new mongoose.Schema({
  topicID: {
    type: String,
    required: true,
  },
  topicName: {
    type: String,
    required: true,
  },
  topicDescription: {
    type: String,
    required: true,
  },
  groupID: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
});

const studentTopicDetails = mongoose.model("topicDetails", Topicschema);

module.exports = studentTopicDetails;
