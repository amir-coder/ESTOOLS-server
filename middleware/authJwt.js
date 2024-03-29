const jwt = require("jsonwebtoken");
const config = require("../config/db.config");
const { ROLES } = require("../models");

const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    res.status(403).send({ message: "No Token Provided!" });
  }

  jwt.verify(token, config.auth_secret, (error, decoded) => {
    if (error) {
      res.status(401).send({ message: `Unauthorized!` });
    }

    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: `ERROR ${err}` });
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: `ERROR ${err}` });
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "admin") {
          next();
          return;
        }
      }
      res.status(403).send({ message: `Require admin role!` });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: `ERROR ${err}` });
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: `ERROR ${err}` });
      }

      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "moderator") {
          next();
          return;
        }
      }
      res.status(403).send({ message: `Require moderator role!` });
      return;
    });
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};

module.exports = authJwt;
