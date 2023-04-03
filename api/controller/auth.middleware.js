const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const GlobalResponse = require("../services/global_response");
const BigPromise = require("../services/big_promise");
const USER = require("../models/user.model");

const auth_checker = BigPromise(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return GlobalResponse(res, "Auth token doesn't exist", false, 401, []);
  }
  const data = jwt.verify(token, JWT_SECRET);
  if (!data) {
    return GlobalResponse(res, "Invalid Token", false, 401, []);
  }
  const user = await USER.findOne({ email: data.email });
  if (!user) {
    return GlobalResponse(res, "User doesn't exist", false, 401, []);
  }
  req.user = user;

  return next();
});

module.exports = auth_checker;
