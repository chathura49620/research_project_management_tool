const mongoose = require("mongoose");

var TopicDetailsschema = new mongoose.Schema({
    topicName: {
    type: String,
    required: false,
  },
  abstract: {
    type: String,
    required: false,
  },
  topicDescription: {
    type: String,
    required: false,
  },
  groupID: {
    type: String,
    required: false,
  },
  researchProblem: {
    type: String,
    required: false,
  },
  researchSolution: {
    type: String,
    required: false,
  },
  technology: {
    type: String,
    required: false,
  },
});

const studentTopicRegistrationDetails = mongoose.model("topicRegistrationDetails", TopicDetailsschema);

module.exports = studentTopicRegistrationDetails;