
var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "01cf1fde1cd007",
    pass: "ce82ebc73019bf"
  }
});


exports.create = (req, res) => {
    var mailOptions = {
      from: req.body.from,
      to: req.body.senderEmail,
      subject:req.body.subject,
      text: req.body.messageE
    };

    transport.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 


  }
  