const express = require("express");
const router = express.Router();
const classController = require("../controllers/class.controller");
const { authorize, checkRole } = require("../middlewares/auth.middleware");

console.log(classController);

router.post("/", authorize, checkRole(["ADMIN"]), classController.createClass);
router.get("/", classController.getClasses);

router.post(
  "/:id/apply",
  authorize,
  checkRole(["TUTOR"]),
  classController.applyClass,
);

router.patch(
  "/apply/:id",
  authorize,
  checkRole(["ADMIN"]),
  classController.updateApplies,
);
module.exports = router;
