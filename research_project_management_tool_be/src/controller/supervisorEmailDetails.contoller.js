var supervisorEmailDetails = require("../model/supervisorEmail.model");

exports.create = (req, res) => {
    // validate request
    if (!req.body) {
      res.status(400).send({ message: req.body });
      return;
    }
  
    const superviserEmailDet = new supervisorEmailDetails({
        senderEmail: req.body.senderEmail,
        subject: req.body.subject,
        messageE: req.body.messageE,
     
    });
  
    superviserEmailDet
      .save(superviserEmailDet)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error: Could not send the email.",
        });
      });
  };
  
  exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id;
  
      supervisorEmailDetails
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
        supervisorEmailDetails
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