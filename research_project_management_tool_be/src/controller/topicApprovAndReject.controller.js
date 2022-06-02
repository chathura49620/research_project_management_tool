
var studentTopicDetails = require("../model/topics.model");
var nodemailer = require('nodemailer');


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'chathuraprabath9949620@gmail.com',
//       pass: 'Cha0703091504*'
//     }
// });
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "01cf1fde1cd007",
    pass: "ce82ebc73019bf"
  }
});

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({ message: "Data cannot be empty." });
    }
  
    const id = req.body.id;
    const status = req.body.status;
    const senderEmail = req.body.groupLeaderEmail
    console.log(id)
    studentTopicDetails
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(400).send({ message: "ID not found." });
        } else {
          if(status === 'Approve'){
            var mailOptions = {
              from: 'panel_member@gmail.com',
              to: senderEmail,
              subject: 'Your Topic was Approved',
              html: '<h1>congratulations</h1><p>Your Reaseach Topic is Approved. you can proceed with this Topic</p><br><br>Thanks and Regards<br>Research Evaluation Panel'
            };
          }
          if(status === 'Reject'){
            var mailOptions = {
              from: 'panel_member@gmail.com',
              to: senderEmail,
              subject: 'Your Topic was Rejected',
              html: '<h1>Sorry</h1><p>Your Reaseach Topic is Rejected. <br> please select another topic and sumbit again .</p><br><br>Thanks and Regards<br>Research Evaluation Panel'
            };
          }
          
          transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error while updating." });
      });
  };