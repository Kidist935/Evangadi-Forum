// import express
const express = require("express");
const app = express();
const port = 4400;

// user routes middleware file

const userRoutes = require("./Routes/UserRoutes");

// user routes middleware
app.use("/api/users", userRoutes);

// user question middleware
const questionRoutes = require("./Routes/QuestionRoutes");
app.use("/api/question", questionRoutes)


// user answer middleware
const answerRoutes = require("./Routes/AnswerRoutes");
app.use("/api/answer", answerRoutes)


app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
