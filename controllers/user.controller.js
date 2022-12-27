const db = require("../models");
const User = db.user;
const Configuration = db.config;

module.exports.allAccess = async (req, res) => {
  res.status(200).send({ message: "Public Content" });
};
module.exports.userBoard = async (req, res) => {
  res.status(200).send({ message: "User Board" });
};

module.exports.adminBoard = async (req, res) => {
  res.status(200).send({ message: "Admin Board" });
};

module.exports.moderatorBoard = async (req, res) => {
  res.status(200).send({ message: "Moderator Board" });
};

module.exports.getConfig = async (req, res) => {
  try {
    console.log(req.userId);
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        console.log(err);
        res.status(500).send({ messsage: err });
        return;
      }
      if (user) {
        console.log(user.config[0]);
        if (user.config[0]) {
          Configuration.findOne({ _id: user.config[0], ...req.body }).exec(
            (err, config) => {
              if (err) {
                console.log(err);
                res.status(500).send({ messsage: err.message });
                return;
              }
              if (config) {
                res.status(200).send({ message: "Sucess!", config: config });
              }
            }
          );
        } else {
          res.status(401).send({ message: "No Configuration found for user" });
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports.postConfig = async (req, res) => {
  try {
  } catch (err) {
    console.log(message);
    res.status(500).send({ messsage: err.message });
  }
};

module.exports.putConfig = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.deleteConfig = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
