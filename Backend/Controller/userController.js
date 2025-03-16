// import db connection
const e = require("express");
const dbconnection = require("../db/dbconfig");

// import bcrypt for password encription
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!email || !password || !username || !firstname || !lastname) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: "Please provide all required fields" });
  }

  try {
    const [user] = await dbconnection.query(
      "select username,userid from usertable where username=? or email=?",
      [username, email]
    );
    if (user.length > 0) {
      return res.status(StatusCodes.CONFLICT).json({ message: "User already existed" });
    }
    if (password.length <= 8) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: "Password must be at least 8 characters" });
    }
    //   password encription
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await dbconnection.query(
      "INSERT INTO usertable (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "An unexpected error occurred." });
  }
}

async function login(req, res) {
  res.send("login");
}

async function checkUser(req, res) {
  res.send("check user");
}

// export as an object
module.exports = { register, login, checkUser };
