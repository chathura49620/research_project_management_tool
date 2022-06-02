const mongoose = require("mongoose");

const document = new mongoose.Schema(
  {
    documentName: { type: String, required: true },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", document);
module.exports = Document;
