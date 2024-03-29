const db = require("../models");
const roles = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // check email
    User.findOne({
      email: req.body.email,
    }).exec((error, user) => {
      if (error) {
        res.status(500).send({ messsage: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! email already existed" });
        return;
      }
      next();
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

checkRolesExisted = async (req, res, next) => {
  try {
    // check
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!db.ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: `Failed! role ${req.body.roles[i]} is not registered.`,
          });
          return;
        }
      }
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
