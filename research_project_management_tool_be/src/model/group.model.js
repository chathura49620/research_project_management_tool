const mongoose = require("mongoose");

const group = new mongoose.Schema(
  {
    member1: { type: String, required: true },
    member2: { type: String, required: true },
    member3: { type: String, required: true },
    member4: { type: String, required: true },
    panelMember: { type: String },
    
   
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", group);
module.exports = Group;
