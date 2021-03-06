const Group = require("../model/group.model");

exports.create = async (req, res) => {
  console.log("hello i am in the goup controller");
  const member1 = req.body.member1;
  const member2 = req.body.member2;
  const member3 = req.body.member3;
  const member4 = req.body.member4;
  const panelMember = "";

  try {
    const newGroup = new Group({
      member1,
      member2,
      member3,
      member4,
      panelMember,
    });

    await newGroup.save();

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();

    res.json(groups);
  } catch (err) {
    res.json({
      status: "error",
      error: "Error happened",
    });
  }
};

exports.EditGroup = async (req, res) => {
  const id = req.params.id;
  const panelMember = req.body.panelMember;

  console.log("inside edit");

  try {
    await Group.updateOne(
      { _id: id },
      {
        $set: {
          panelMember,
        },
      }
    );
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
};

exports.RemoveGroup = async (req, res) => {
  const id = req.params.id;

  // const responce =  await User.deleteOne({_id: id});
  try {
    await Group.deleteOne({ _id: id });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
};
