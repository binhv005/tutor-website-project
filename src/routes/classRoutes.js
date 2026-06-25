const express = require("express");
const router = express.Router();
const classController = require("../controllers/class.controller");
const { authorize, checkRole } = require("../middlewares/auth.middleware");

console.log(classController);

router.post("/", authorize, checkRole(["ADMIN"]), classController.createClass);
router.get("/", classController.getClasses);

module.exports = router;
