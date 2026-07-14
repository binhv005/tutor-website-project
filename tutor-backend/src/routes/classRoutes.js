const express = require("express");
const router = express.Router();
const classController = require("../controllers/class.controller");
const validate = require("../middlewares/validate.middleware");
const {
  createClassSchema,
  updateClassSchema,
} = require("../validators/class.schema");

const { authentication } = require("../middlewares/auth.middleware");

router.get("/", classController.getClasses);

router.post(
  "/",
  authentication,
  validate(createClassSchema),
  classController.createClass,
);

router.put(
  "/:id",
  authentication,
  validate(updateClassSchema),
  classController.updateClass,
);

router.delete("/:id", authentication, classController.deleteClass);

module.exports = router;
