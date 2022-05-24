const mongoose = require("mongoose");

var TopicDetailsschema = new mongoose.Schema({
    topicName: {
    type: String,
    required: true,
  },
  abstract: {
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
  researchProblem: {
    type: String,
    required: true,
  },
  researchSolution: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
});

const studentTopicRegistrationDetails = mongoose.model("topicRegistrationDetails", TopicDetailsschema);

module.exports = studentTopicRegistrationDetails;