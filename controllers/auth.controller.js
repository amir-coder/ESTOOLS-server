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
      Role.find({ name: { $in: req.body.roles } }, (err, roles) => {
        if (err) {
          res.status(500).send({ message: `error: ${err}` });
        }

        user.roles = roles.map((role) => role._id);
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
          }

          res.status(200).send({ message: "User Registered successfully!" });
        });
      });
    } else {
      //add default role student
      Role.findOne({ name: "student" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: `error: ${err}` });
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
          }
          res.status(200).send({ message: "User Registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findById(req.userId)
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: `error: ${err}` });
      }

      if (!user) {
        res.status(404).send({ message: "User not Found!" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.headers.password,
        user.password
      );

      if (!passwordIsValid) {
        res
          .status(401)
          .send({ accessToken: null, message: "Invalide Password!" });
      }

      var token = jwt.sign({ is: user._id }, config.secret, {
        expiresIn: 86400, //24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      res.status(200).send({
        message: "success!",
        accessToken: token,
        user: {
          email: user.email,
          username: username,
          id: user._id,
          roles: authorities,
        },
      });
    });
};
