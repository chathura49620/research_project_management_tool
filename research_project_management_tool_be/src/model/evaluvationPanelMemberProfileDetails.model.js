const mongoose = require("mongoose");

var EvaluvationPanelMemProfileDetailschema = new mongoose.Schema({

  evaluvatioPanelMemberID: {
    type: String,
    required: true,
  },
  evaluvatioPanelMemberName: {
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

const EvaluvationPanelMemberProfileDetailschema = mongoose.model("EvaluvationPanelMemDetailschema", EvaluvationPanelMemProfileDetailschema);

module.exports = EvaluvationPanelMemberProfileDetailschema;