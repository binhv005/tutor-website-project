const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");
const { authorize, checkRole } = require("../middlewares/auth.middleware");
console.log(authController);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post(
  "/classes",
  authorize,
  checkRole(["ADMIN"]),
  authController.createClass,
);
module.exports = router;
