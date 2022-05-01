const User = require("../model/user.model")


exports.getAllMembers = async(req, res) => {

  try{
    const users =   await User.find();

    res.json(users);

  }catch(err){

res.json({
  status: "error", error: "Error happened" 
})

  }
      
 
   
 }




exports.create = async(req, res) => {
  console.log("hello i am in the user controller");
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const address = req.body.address;
  const contactNumber = req.body.contactNumber;
  const age = req.body.age;
  const password = req.body.password;
  const type = req.body.type;

  try{
    const newUser = new User({firstName, lastName, email, address, contactNumber,
      age, password, type});

    await  newUser.save();
  
    res.json({ status: "ok", name: firstName });


  }catch(err){


    res.json({ status: "error", error: "duplicate email" });

  }
  
};

exports.getLogins = async(req, res) => {

 const email = req.params.email;
 const password = req.params.password;

 console.log("inside login")

 try{
  const user = await User.findOne({
    email,
    password
  });

  if (user == null) {
    throw new Error();
  }else{
    res.json({status: 'ok'})
  }

  
 }catch(err){
  res.json({ status: "error", user: false });
 }


  // const user = await User.findOne({
  //   email, password
   
  // });


 
  
}



