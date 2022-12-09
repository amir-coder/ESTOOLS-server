const nodemailer = require("nodemailer");
const mailConfig = require("../config/email.config");
const apiConfig = require("../config/api.config");

module.exports.send_email = async (email, secretString) => {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: mailConfig.email,
      clientId: mailConfig.client_id,
      clientSecret: mailConfig.client_secret,
      refreshToken: mailConfig.refresh_token,
    },
  });

  let mailOptions = {
    from: mailConfig.email,
    to: email,
    subject: "Estools email confirmation",
    html: `Press <a href="${apiConfig.HOST}:${apiConfig.PORT}/auth/verify/${email}/${secretString}" > Here <a/> To verify your email. Thanks.`,
  };

  Transport.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.log("ERROR:", err);
    } else {
      console.log("Message send");
    }
  });
};
