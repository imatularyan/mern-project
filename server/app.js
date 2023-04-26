const mongoose = require("mongoose");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const DB = "";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));

// middleware
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello world");
});

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

app.listen(port, () => {
  console.log(` listening on ${port}`);
});
