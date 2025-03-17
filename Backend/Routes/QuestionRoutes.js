// import express
const express = require("express");
// to attach any routes
const router = express.Router();
// authentication middleware
const authMiddleware = require("../Middleware/authMiddleware");

// user controllers
const {
  postQuestion,
  getQuestion,
  singleQuestion,
} = require("../Controller/questionController");

// Creates a new question(Post Question)

router.post("/", authMiddleware, postQuestion);

//  Fetches all questions(Get All Questions)
router.get("/", authMiddleware, getQuestion);

// get single(specific) question(Get Single Question)
router.get("/:questionid", authMiddleware, singleQuestion);

module.exports = router;
