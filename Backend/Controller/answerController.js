// import db connection
const express = require("express");
const dbconnection = require("../db/dbconfig");
// status code
const { StatusCodes } = require("http-status-codes");

// Retrieves answers for a specific question
async function retrieveAnswer(req, res){
  try {
    const questionid= req.params.questionid;
    // console.log("received questionid", questionid);

    if(!questionid){
        return res.status(StatusCodes.BAD_REQUEST).json({Error:"INVALID QUESTION_ID"})
    }
    const answers = await dbconnection.query("SELECT * FROM answertable WHERE questionid = ?",[questionid])
        console.log("query results", answers);
        res.status(StatusCodes.OK).json({answers: answers[0]})
  
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"An unexpected error occurred."})
  }

}


// submit an answers for a specific questions
async function submitAnswer(req,res){
    try {
      const {questionid, answer} = req.body
    //   get user id from authentication
      const userid= req.user.userid;   
      if(!questionid || !answer || !userid){
      return  res.status(StatusCodes.BAD_REQUEST).json({message:"Please provide answer"})
      }

    
      const query = await dbconnection.query("INSERT INTO answertable (userid, questionid, answer) VALUES (?, ?, ?)",[userid, questionid, answer])
       
        res.status(StatusCodes.CREATED).json({message: "Answer posted successfully"})
    
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"An unexpected error occurred."})
    }
}


// export as an object
module.exports ={retrieveAnswer, submitAnswer }