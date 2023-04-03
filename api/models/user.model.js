const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/index");
const crypto = require("crypto");
const UserModel = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Insufficient data"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Insufficient data"],
    minlength: [8, "Minimum 8 character password required"],
  },
  forgetPasswordToken: {
    type: String,
    select: false,
  },
  forgetPasswordTokenExpiry: {
    type: Date,
    select: false,
  },
});

UserModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  // console.log(this.password);
  return next();
});

UserModel.methods = {
  async comparePassword(pass) {
    return await bcrypt.compare(pass, this.password);
  },
  async generateJWTToken() {
    // console.log(typeof config.JWT_EXPIRES);
    return jwt.sign({ email: this.email, _id: this._id }, config.JWT_SECRET, {
      expiresIn: Date.now() + 2 * 24 * 60 * 60 * 1000,
    });
  },
  async generateForgetPasswordToken() {
    const token = crypto.randomBytes(64).toString("hex");
    this.forgetPasswordToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    this.forgetPasswordTokenExpiry = Date.now() + 2 * 24 * 60 * 60 * 1000; //generate two days expiry password
    console.log(token);
    return token;
  },
};

module.exports = mongoose.model("user", UserModel);
