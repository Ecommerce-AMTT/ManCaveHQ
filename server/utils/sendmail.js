const { transporter, mailOptions } = require("./nodemailer");

const sendmail = async (to, subject, text, bcc) => {
  let options = { ...mailOptions, to, subject, text, html: text, bcc };

  try {
    const response = await transporter.sendMail(options);
    console.log(`Email successfully transmitted to ${to}`);
    return "success";
  } catch (error) {
    console.error(error);
    console.log("mail options: ", options);
    return "fail";
  }
};

module.exports = sendmail;
