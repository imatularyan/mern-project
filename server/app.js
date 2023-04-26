const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// link router files to make our routes easy
app.use(require("./router/auth"));

// middleware
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("hello world app");
// });

app.get("/about", middleware, (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/signin", (req, res) => {
  res.send("SignIn page");
});

app.get("/signup", (req, res) => {
  res.send("SignUp page");
});

app.listen(PORT, () => {
  console.log(` listening on ${PORT}`);
});
