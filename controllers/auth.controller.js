const config = require("../config/auth.config");
const db = require("../models");
const { send_email } = require("mail.controller");
const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    //create a user
    console.log("body: ", req.body);
    const user = User({
      firstname: req.body["firstname"],
      lastname: req.body["lastname"],
      email: req.body["email"],
      password: bcrypt.hashSync(req.body.password, 8),
    });
    //save user
    user.save((err, user) => {
      if (err) {
        res.status(500).send({ message: `error: ${err}` });
      } else {
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
              res
                .status(200)
                .send({ message: "User Registered successfully!" });

              //send verification email with secret string
              var secret = jwt.sign(
                { is: user._id },
                config.verification_secret,
                {
                  expiresIn: 86400, //24 hours
                }
              );
              send_email(user.email, secret);
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
              res
                .status(200)
                .send({ message: "User Registered successfully!" });
            });
          });
        }
      }
    });
  } catch (err) {
    res.status(500).send({ message: err });
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  try {
    User.findOne({ email: req.body.email })
      .populate("roles", "-__v")
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: `error: ${err}` });
        }

        if (!user) {
          res.status(404).send({ message: "User not Found!" });
        } else {
          var passwordIsValid = bcrypt.compareSync(
            req.body.password,
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
              firstname: user["firstname"],
              lastname: user["lastname"],
              id: user._id,
              roles: authorities,
            },
          });
        }
      });
  } catch (err) {
    res.status(500).send({ message: `error: ${err}` });
    console.log(err);
  }
};

exports.verifyEmail = async (req, res) => {
  const { email, secretString } = req.params;

  const user = User.findOne({ email: email });
  try {
    if (user) {
      //need to verify the secretString
      var secretIsValid = bcrypt.compareSync(
        secretString,
        user.emailVarificationString
      );

      if (secretIsValid) {
        user.isValid = true;
        await user.save();
        res.status(200).send({ message: "Verified Successfully!" });
      } else {
      }
    } else {
      res.status(400).send({ message: "User not Found!" });
    }
  } catch (error) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};
