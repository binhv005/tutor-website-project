const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile.controller");
const { authorize, checkRole } = require("../middlewares/auth.middleware");
router.patch(
  "/me",
  authorize,
  checkRole(["TUTOR", "ADMIN"]),
  profileController.updateProfile,
);
router.get("/me", authorize, profileController.getProfile);
module.exports = router;
