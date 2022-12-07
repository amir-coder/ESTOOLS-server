const nodemailer = require("nodemailer");
const mailConfig = require("../config/email.config");
const apiConfig = require("../config/api.config");

const send_email = async (email, secretString) => {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: mailConfig.email,
      pass: mailConfig.password,
    },
  });

  let mailOptions = {
    from: mailConfig.email,
    to: email,
    html: `Press <a href="${apiConfig.HOST}:${apiConfig.PORT}/verify/${apiConfig.secretString}" > Here <a/> To verify your email. Thanks.`,
  };

  Transport.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log("ERROR:", err);
    } else {
      console.log("Message send");
    }
  });
};
