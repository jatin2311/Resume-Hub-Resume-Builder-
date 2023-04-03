const express = require("express");
const app = express();
const auth_router = require("./router/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.set("Access-Control-Allow-Origin", "https://resumebuilderhub.netlify.app");

app.use(
  cors({
    origin: ["https://resumebuilderhub.netlify.app", "http://localhost:3001"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    exposedHeaders: ["*", "Authorization"],
  })
);
// app.use(urlencoded({}));
app.get("/", (_req, res) => {
  res.send("I am at testing root");
});
app.use(auth_router);

module.exports = app;
