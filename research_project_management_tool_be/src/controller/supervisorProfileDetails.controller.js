var SupervisorProfileDetschema = require("../model/supervisorProfileDetails.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const SupProfileDetschema = new SupervisorProfileDetschema({
    supervisorID: req.body.supervisorID,
    supervisorName: req.body.supervisorName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  SupProfileDetschema
    .save(SupProfileDetschema)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could Not Add Supervisor Details.",
      });
    });
};

exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id;
  
      SupervisorProfileDetschema
        .findById(id)
        .then((data) => {
          if (!data) {
            res
              .status(404)
              .send({ message: "Could Not Find Supervisor Details With ID" + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error While Retrieving Supervisor Details With ID" + id,
          });
        });
    } else {
        SupervisorProfileDetschema
        .find()
        .then((matCode) => {
          res.send(matCode);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error: Cannot Retrieve Supervisor Details",
          });
        });
    }
  };

    //update 
exports.update = (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .send({ message: "Data To Be Update Can Not Be Empty" });
    }
  
    const id = req.body.id;
    SupervisorProfileDetschema
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res
            .status(400)
            .send({ message: "Supervisor Details Is Not Found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error While Updateting Details" });
      });
  };
  
  //Delete 
  exports.delete = (req, res) => {
    const id = req.body.id;
  
    SupervisorProfileDetschema
      .findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Can Not Delete Supervisor Details With $(id).`,
          });
        } else {
          res.send({ message: "Supervisor Details Was Deleted" });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error While Deleting." });
      });
  };
