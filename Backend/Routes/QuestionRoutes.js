// import express
const express = require("express");
// to attach any routes
const router = express.Router();

// user controllers
const {pQuestion, gQuestion, sQuestion} = require('../Controller/questionController')

// Creates a new question(Post Question)

router.post("/", pQuestion);

//  Fetches all questions(Get All Questions)
router.get("/", gQuestion);

// get single(specific) question(Get Single Question)
router.get("/:question_id",sQuestion);



module.exports = router;
