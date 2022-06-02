const mongoose = require("mongoose");

var supervisorDetailsschema = new mongoose.Schema({

    senderEmail: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  
});

const supervisorEmailDetails = mongoose.model("supervisorEmailApproveDetails", supervisorDetailsschema);

module.exports = supervisorEmailDetails;