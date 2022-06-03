const mongoose = require("mongoose");

var SupervisorProfileDetailschema = new mongoose.Schema({

  supervisorID: {
    type: String,
    required: true,
  },
  supervisorName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const SupervisorProfileDetschema = mongoose.model("SupProfileDetailschema", SupervisorProfileDetailschema);

module.exports = SupervisorProfileDetschema;