// import express
const express = require("express");
// to attach any routes
const router = express.Router();

// For user
// Register Route
router.post("/register", (req, res) => {
  res.send("register user");
});

// login user
router.post("/login", (req, res) => {
  res.send("login user");
});
// check user
router.get("/checkUser", (req, res) => {
  res.send("check user");
});

module.exports = router;
