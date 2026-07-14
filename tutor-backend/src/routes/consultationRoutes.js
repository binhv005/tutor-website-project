const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultation.controller");
const validate = require("../middlewares/validate.middleware");
const {
  createConsultationSchema,
  updateConsultationSchema,
} = require("../validators/consultation.schema");
const { authentication } = require("../middlewares/auth.middleware");

router.post(
  "/",
  validate(createConsultationSchema),
  consultationController.create,
);
router.get("/", authentication, consultationController.getAll);
router.put(
  "/:id",
  authentication,
  validate(updateConsultationSchema),
  consultationController.updateStatus,
);
router.delete("/:id", authentication, consultationController.remove);

module.exports = router;
