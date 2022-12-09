const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require("express");

const route = new express.Router();

route.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
);
route.post("/signin", controller.signin);
route.get("/verify/:email/:secretString", controller.verifyEmail);

module.exports = route;
