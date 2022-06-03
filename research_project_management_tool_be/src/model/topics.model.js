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
  status: {
    type: String,
    required: false,
  },
  groupLeaderEmail: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
});

const studentTopicDetails = mongoose.model("topicDetails", Topicschema);

module.exports = studentTopicDetails;
