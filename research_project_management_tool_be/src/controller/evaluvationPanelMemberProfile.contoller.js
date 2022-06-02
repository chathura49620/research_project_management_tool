var EvaluvationPanelMemberProfileDetailschema = require("../model/evaluvationPanelMemberProfileDetails.model");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: req.body });
    return;
  }

  const EvalPanelMemberProfileDetailschema = new EvaluvationPanelMemberProfileDetailschema({
    evaluvatioPanelMemberID: req.body.evaluvatioPanelMemberID,
    evaluvatioPanelMemberName: req.body.evaluvatioPanelMemberName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  EvalPanelMemberProfileDetailschema
    .save(EvalPanelMemberProfileDetailschema)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error: Could Not Add Evaluvation Panel Member Details.",
      });
    });
};

exports.find = (req, res) => {
    if (req.query.id) {
      const id = req.query.id;
  
      EvaluvationPanelMemberProfileDetailschema
        .findById(id)
        .then((data) => {
          if (!data) {
            res
              .status(404)
              .send({ message: "Could Not Find Evaluvation Panel Member Details With ID" + id });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({
            message: "Error While Retrieving Evaluvation Panel Member Details With ID" + id,
          });
        });
    } else {
        EvaluvationPanelMemberProfileDetailschema
        .find()
        .then((matCode) => {
          res.send(matCode);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error: Cannot Retrieve Evaluvation Panel Member Details",
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
    EvaluvationPanelMemberProfileDetailschema
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res
            .status(400)
            .send({ message: "Evaluvation Panel Member Details Is Not Found" });
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
  
    EvaluvationPanelMemberProfileDetailschema
      .findByIdAndDelete(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Can Not Delete Evaluvation Panel Member Details With $(id).`,
          });
        } else {
          res.send({ message: "Evaluvation Panel Member Details Was Deleted" });
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error While Deleting." });
      });
  };