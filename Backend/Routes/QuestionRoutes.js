// import express
const express = require("express");
// to attach any routes
const router = express.Router();

// For question

// Creates a new question(Post Question)

router.post("/", (req, res) => {
  res.send("new question ");
});

//  Fetches all questions(Get All Questions)
router.get("/", (req, res) => {
  res.send("all questions");
});

// get single(specific) question(Get Single Question)
router.get("/:question_id", (req, res) => {
  const qId = req.params.question_id;
  // call mysql using qId and send the result with res.send
  res.send(`single question : ${qId}`);
});

module.exports = router;
