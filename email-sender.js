var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zinasondes@gmail.com',
      pass: '***********'
    }
  });
  
  var mailOptions = {
    from: 'zinasondes@gmail.com',
    to: 'zakhamasabri@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi Dear Ihow are you!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });