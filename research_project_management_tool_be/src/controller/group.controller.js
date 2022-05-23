const Group = require("../model/group.model")


exports.create = async(req, res) => {
    console.log("hello i am in the goup controller");
    const member1 = req.body.member1;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const member4 = req.body.member4;
    const panelMember = "";
  
    try{
      const newGroup = new Group({member1, member2, member3, member4, panelMember});
  
      await  newGroup.save();
    
      res.json({ status: "ok"});
  
  
    }catch(err){
  
  
      res.json({ status: "error"});
  
    }
    
  };


  
exports.getAllGroups = async(req, res) => {

    try{
      const groups =   await Group.find();
  
      res.json(groups);
  
    }catch(err){
  
  res.json({
    status: "error", error: "Error happened" 
  })
  
    }
        
   
     
   }