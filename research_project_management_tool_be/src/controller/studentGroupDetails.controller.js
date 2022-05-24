var studentGroupDetails = require("../model/student.GroupDetails.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const stuGroupDetails = new studentGroupDetails({
    studentID: req.body.studentID,
    studentName: req.body.studentName,
    email: req.body.email,
    phone: req.body.phone,
    specilization: req.body.specilization,
  });

  stuGroupDetails
    .save(stuGroupDetails)
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
  
      studentGroupDetails
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
        studentGroupDetails
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