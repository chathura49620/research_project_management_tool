var supervisorMessageDetails = require("../model/messages.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const messageDetails = new supervisorMessageDetails({
    title: req.body.title,
    messagedesc: req.body.messagedesc,
    topicDescription: req.body.topicDescription,
    type: req.body.type,
  });

  messageDetails
    .save(messageDetails)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could not add message.",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    supervisorMessageDetails
      .findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "Could not find message with ID" + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error while retrieving Message Details with ID" + id,
        });
      });
  } else {
    supervisorMessageDetails
      .find()
      .then((matCode) => {
        res.send(matCode);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error: Cannot retrieve Message Details",
        });
      });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data cannot be empty." });
  }

  const id = req.body.id;
  supervisorMessageDetails
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

  supervisorMessageDetails
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: `Cannot delete Message with $(id).` });
      } else {
        res.send({ message: "Message was deleted" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while deleting." });
    });
};
