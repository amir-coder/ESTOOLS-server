const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

const route = new express.route();

route.post(
  "signup/",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  constroller.signup
);
route.post("signin/", controller.signin);

module.exports = route;
