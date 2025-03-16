// import express
const express = require("express");
const app = express();
const port = 4400;

// import db connection

const dbconnection = require("./db/dbconfig")



// user routes middleware file
const userRoutes = require("./Routes/UserRoutes");


// json middleware to extract json data
app.use(express.json());


// user routes middleware
app.use("/api/users", userRoutes);

// user question middleware
const questionRoutes = require("./Routes/QuestionRoutes");
app.use("/api/question", questionRoutes)


// user answer middleware
const answerRoutes = require("./Routes/AnswerRoutes");
app.use("/api/answer", answerRoutes)


async function start(){
  try {
    
    const result = await dbconnection.execute("select  'test' ")

   await app.listen(port);
    console.log("Database connection established");
    console.log(`Listening on ${port}`);

  } catch (error) {
    
    console.log(error.message);
  }
}
start();



