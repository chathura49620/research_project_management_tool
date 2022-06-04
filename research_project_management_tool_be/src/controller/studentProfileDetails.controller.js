var StuProfileDetailschema = require("../model/studentProfileDetails.model");

//Save Methode
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const StuProfileDetchema = new StuProfileDetailschema({
    studentID: req.body.studentID,
    studentName: req.body.studentName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  StuProfileDetchema
    .save(StuProfileDetchema)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could Not Add Student Details.",
      });
    });
};

//Find Methode
exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id;
  
      StuProfileDetailschema
        .findById(id)
        .then((data) => {
          if (!data) {
            res
              .status(404)
              .send({ message: "Could Not Find Student Details With ID" + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error While Retrieving Student Details With ID" + id,
          });
        });
    } else {
        StuProfileDetailschema
        .find()
        .then((matCode) => {
          res.send(matCode);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error: Cannot Retrieve Student Details",
          });
        });
    }
  };

    //update methode
exports.update = (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .send({ message: "Data To Be Update Can Not Be Empty" });
    }
  
    const id = req.body.id;
    StuProfileDetailschema
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res
            .status(400)
            .send({ message: "Student Details Is Not Found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error While Updateting Details" });
      });
  };
  
  //Delete methode
  exports.delete = (req, res) => {
    const id = req.body.id;
  
    StuProfileDetailschema
      .findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Can Not Delete Student Details With $(id).`,
          });
        } else {
          res.send({ message: "Student Details Was Deleted" });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error While Deleting." });
      });
  };
