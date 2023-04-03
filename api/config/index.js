require("dotenv").config();

const config = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_AUTH_USER: process.env.SMTP_AUTH_USER,
  SMTP_AUTH_PASS: process.env.SMTP_AUTH_PASS,
  SMTP_CLIENT_ID: process.env.SMTP_CLIENT_ID,
  SMTP_CLIENT_SECRET: process.env.SMTP_CLIENT_SECRET,
  SMTP_CLIENT_REFRESH_TOKEN: process.env.SMTP_CLIENT_REFRESH_TOKEN,
};

module.exports = config;
