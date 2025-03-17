// import db connection
const express = require("express");
const router = express.Router();
const dbconnection = require("../db/dbconfig");
const { v4: uuidv4 } = require("uuid");
const { StatusCodes } = require("http-status-codes");

async function postQuestion(req, res) {
  try {
    console.log("user data", req.user);
    // ensure user is authenticated and userid exist
    if (!req.user || !req.user.userid) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "USER not authenticated" });
    }
    // const qid = req.params.question_id;
    const { title, description, tag } = req.body;
    // Check if required fields are provided
    if (!title || !description) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Please provide all required fields" });
    }

    const questionid = uuidv4().substring(0, 100);
    // Insert question into database
    const [result] = await dbconnection.query(
      "INSERT INTO questiontabel (questionid, userid, title, tag, description) VALUES (?, ?, ?, ?, ?)",
      [questionid, req.user.userid, title, description, tag || null]
    );

    res
      .status(StatusCodes.CREATED)
      .json({ message: "Question created successfully" });
  } catch (error) {
    console.log("post question error", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred." });
  }
}

// get all question

async function getQuestion(req, res) {
  try {
    const [results] = await dbconnection.query(
      "SELECT * FROM questiontabel ORDER BY id DESC"
    );

    if (results.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "No questions found." });
    }
    res.status(StatusCodes.OK).json({ questions: results });
  } catch (error) {
    console.log("get question error", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An unexpected error occurred." });
  }
}

// get single queston
async function singleQuestion(req, res) {
  try {
    const questionid = req.params.questionid;

    console.log("recived questionid ", questionid);

    if (!questionid) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid question ID" });
    }
    const [results] = await dbconnection.query(
      "SELECT * FROM questiontabel WHERE questionid  = ?",
      [questionid]
    );

    if (results.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Not Found",
        message: "The requested question could not be found.",
      });
    }
    res.status(StatusCodes.OK).json({ question: results[0] });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
}

// export as an object
module.exports = { postQuestion, getQuestion, singleQuestion };
