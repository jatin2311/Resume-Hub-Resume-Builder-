const auth_router = require("express").Router();
const {
  signup,
  signin,
  forgetPassword,
  resetPassword,
  logOut,
} = require("../controller/auth.controller");
const auth_checker = require("../controller/auth.middleware");
const GlobalResponse = require("../services/global_response");

auth_router.post("/api/signup", signup);
auth_router.post("/api/signin", signin);
auth_router.get("/api/auth/forget", forgetPassword);
auth_router.get("/api/auth/resetpass/:id", resetPassword);
auth_router.get("/api/logout", logOut);

auth_router.get("/api/home", auth_checker, (_req, res) => {
  return GlobalResponse(res, "Authorise", true, 201, []);
});
module.exports = auth_router;
