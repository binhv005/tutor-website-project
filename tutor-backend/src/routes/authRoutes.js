const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const {
  loginSchema,
  changePasswordSchema,
} = require("../validators/auth.schema");

const { authentication } = require("../middlewares/auth.middleware");

router.post("/login", validate(loginSchema), authController.login);

router.post(
  "/change-password",
  authentication,
  validate(changePasswordSchema),
  authController.changePassword,
);

module.exports = router;
