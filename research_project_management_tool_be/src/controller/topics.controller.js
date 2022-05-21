var studentTopicDetails = require("../model/topics.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const topicDetails = new studentTopicDetails({
    topicID: req.body.topicID,
    topicName: req.body.topicName,
    topicDescription: req.body.topicDescription,
    groupID: req.body.groupID,
    groupName: req.body.groupName,
  });

  topicDetails
    .save(topicDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could not add topic.",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    studentTopicDetails
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
    studentTopicDetails
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

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data cannot be empty." });
  }

  const id = req.body.id;
  studentTopicDetails
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "ID not found." });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while updating." });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  studentTopicDetails
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: `Cannot delete Topic with $(id).` });
      } else {
        res.send({ message: "Topic was deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while deleting." });
    });
};
