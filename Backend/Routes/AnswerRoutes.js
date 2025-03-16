// import express
const express= require('express');
// to attach any routes
const router = express.Router();

// user controllers
const {retrieveAnswer, submitAnswer } = require('../Controller/answerController')


// Retrieves answers for a specific question.
router.get("/:question_id", retrieveAnswer)


// Submits an answer for a specific question.
router.post("/", submitAnswer)

module.exports = router