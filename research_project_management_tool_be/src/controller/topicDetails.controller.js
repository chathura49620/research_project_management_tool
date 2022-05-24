var studentTopicRegistrationDetails = require("../model/topicDetails.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const stutopicDetails = new studentTopicRegistrationDetails({
    topicName: req.body.topicName,
    abstract: req.body.abstract,
    topicDescription: req.body.topicDescription,
    groupID: req.body.groupID,
    researchProblem: req.body.researchProblem,
    researchSolution: req.body.researchSolution,
    technology: req.body.technology,
  });

  stutopicDetails
    .save(stutopicDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could not add student group details.",
      });
    });
};

exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id;
  
      studentTopicRegistrationDetails
        .findById(id)
        .then((data) => {
          if (!data) {
            res
              .status(404)
              .send({ message: "Could not find topic with ID" + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error while retrieving Topic Details with ID" + id,
          });
        });
    } else {
        studentTopicRegistrationDetails
        .find()
        .then((matCode) => {
          res.send(matCode);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error: Cannot retrieve Topic Details",
          });
        });
    }
  };