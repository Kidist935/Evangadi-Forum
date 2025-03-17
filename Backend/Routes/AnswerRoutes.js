// import express
const express= require('express');
// to attach any routes
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware')

// user controllers
const {retrieveAnswer, submitAnswer } = require('../Controller/answerController')


// Retrieves answers for a specific question.
router.get("/:questionid", authMiddleware,retrieveAnswer)


// Submits an answer for a specific question.
router.post("/", authMiddleware,submitAnswer)

module.exports = router