const nodemailer = require("nodemailer");

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const mailConfig = require("../config/email.config");
const apiConfig = require("../config/api.config");

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    mailConfig.client_id,
    mailConfig.client_secret,
    // "https://developers.google.com/oauthplayground"
    "https://oauth2.googleapis.com/token"
  );

  oauth2Client.setCredentials({
    refreshToken: mailConfig.refresh_token,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Can't create access token :<!");
      }
      resolve(token);
    });
  });

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: mailConfig.email,
      accessToken,
      clientId: mailConfig.client_id,
      clientSecret: mailConfig.client_secret,
      refreshToken: mailConfig.refresh_token,
    },
  });

  return transporter;
};

const sendMail = async (emailOptions) => {
  transporter = await createTransporter();

  transporter.sendEmail(emailOptions);
};

module.exports.send_email = async (email, secretString) => {
  try {
    let mailOptions = {
      from: mailConfig.email,
      to: email,
      subject: "Estools email confirmation",
      html: `Press <a href="${apiConfig.HOST}:${apiConfig.PORT}/auth/verify/${email}/${secretString}" > Here <a/> To verify your email. Thanks.`,
    };

    sendMail(mailOptions);
  } catch (err) {
    console.log("Error:", err);
    res.satatus(500).send({ error: err });
  }
};
