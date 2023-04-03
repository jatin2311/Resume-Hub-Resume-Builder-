const nodemailer = require("nodemailer");
const config = require("../config/index");
const transpoter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_HOST,
  secure: true,
  auth: {
    // type: "oauth2",
    user: config.SMTP_AUTH_USER,
    pass: config.SMTP_AUTH_PASS,

    // clientId: config.SMTP_CLIENT_ID,
    // clientSecret: config.SMTP_CLIENT_SECRET,
    // refreshToken: config.SMTP_CLIENT_REFRESH_TOKEN,
  },
});

module.exports = transpoter;
