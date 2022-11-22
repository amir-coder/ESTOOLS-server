const config = require("../config/auth.config");
const db = require("../models");

const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  //create a user
  const user = User({
    username: req.body["username"],
    email: req.body["email"],
    password: bcrypt.hashSync(req.body["password"], 8),
  });
  //save user
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: `error: ${err}` });
    }

    if (req.body.roles) {
      //add roles ids
    } else {
      //add default role student
    }
  });
};

exports.signin = (req, res) => {};
