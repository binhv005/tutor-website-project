const express = require("express");
const router = express.Router();
const classController = require("../controllers/class.controller");
const validate = require("../middlewares/validate.middleware");
const {
  createClassSchema,
  updateClassSchema,
} = require("../validators/class.schema");

// BÓC TÁCH ĐÚNG CÁC HÀM TỪ OBJECT MIDDLEWARE
const { authentication } = require("../middlewares/auth.middleware");

// 1. Route Lấy danh sách lớp
router.get("/", classController.getClasses);

// 2. Route Tạo lớp
router.post(
  "/",
  authentication,
  validate(createClassSchema),
  classController.createClass,
);

// 3. Route Cập nhật lớp
router.put(
  "/:id",
  authentication,
  validate(updateClassSchema),
  classController.updateClass,
);

// 4. Route Xóa lớp (ĐÃ BỔ SUNG Ở ĐÂY)
// Vì xóa cần biết xóa lớp nào (:id) và ai xóa (authentication)
router.delete("/:id", authentication, classController.deleteClass);

module.exports = router;
