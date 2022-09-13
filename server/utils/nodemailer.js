const nodemailer = require("nodemailer");
require("dotenv").config();

/*
  nodemailer requires that your .env file in the server root has the following properties. Please do not load your .env into github
  
    process.env.APP_EMAIL=<your_app_email>
    process.env.APP_PWD=<your_app_password> 

    NB// You need to set a special app password in order to use gmail as smtp server
*/

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PWD,
  },
});

const mailOptions = {
  from: "customerservice@merncavehq.com",
  to: "myfriend@yahoo.com",
  subject: "Email test",
  text: "This works...",
};

module.exports = { transporter, mailOptions };
