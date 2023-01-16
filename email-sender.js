//email-sender.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khelfawalid@gmail.com",
    pass: "mypassword",
  },
});

const mailOptions = {
  from: "khelfawalid@gmail.com",
  to: "khelfawalid@gmail.com",
  subject: "Test Email",
  text: "This is a test email sent from Node.js",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
