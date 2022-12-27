const controller = require("../controllers/user.controller");
const { authJwt } = require("../middleware");
const express = require("express");

const router = new express.Router();

//TODO: implement router endpoints

router.get("/all", controller.allAccess);
router.get("/", [authJwt.verifyToken], controller.userBoard);
router.get("/config", [authJwt.verifyToken], controller.getConfig);

router.get(
  "/moderator",
  [authJwt.verifyToken, authJwt.isModerator],
  controller.moderatorBoard
);
router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);
module.exports = router;
