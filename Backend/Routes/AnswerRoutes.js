// import express
const express= require('express');
// to attach any routes
const router = express.Router();


// Retrieves answers for a specific question.
router.get("/:question_id",(req,res)=>{
    
    // params is contains after / comes
    const quID= req.params.question_id;
    res.send(`specific answer: ${quID}`);
})


// Submits an answer for a specific question.
router.post("/",(req,res)=>{
    res.send("submit answer")
})

module.exports = router