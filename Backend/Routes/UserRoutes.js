// import express
const express = require("express");
// to attach any routes
const router = express.Router();

// authentication middleware
const authMiddleware =require('../Middleware/authMiddleware')

// user controllers
const {register, login, checkUser} = require('../Controller/userController')



// Register Route
router.post("/register", register);

// login user
router.post("/login", login);
// check user
router.get("/checkUser", authMiddleware,  checkUser);

module.exports = router;
