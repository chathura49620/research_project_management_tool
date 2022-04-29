const User = require("../model/user.model")

exports.create = async(req, res) => {
  console.log("hello i am in the user controller");
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try{
    const newUser = new User({name, email, password});

    await  newUser.save();
  
    res.json({ status: "ok", name: name });


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
