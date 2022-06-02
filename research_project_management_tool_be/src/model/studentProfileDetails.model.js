const mongoose = require("mongoose");

var StudentProfileDetailschema = new mongoose.Schema({

  studentID: {
    type: String,
    required: true,
  },
  studentName: {
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

const StuProfileDetailschema = mongoose.model("StuProfileDetschema", StudentProfileDetailschema);

module.exports = StuProfileDetailschema;