const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultation.controller");
const validate = require("../middlewares/validate.middleware");
const {
  createConsultationSchema,
  updateConsultationSchema,
} = require("../validators/consultation.schema");

// BÓC TÁCH CHÍNH XÁC HÀM TỪ OBJECT MIDDLEWARE (ĐÃ SỬA DÒNG NÀY)
const { authentication } = require("../middlewares/auth.middleware");

// Khách hàng gửi form tư vấn (Không cần login, nhưng cần validate đầu vào)
router.post(
  "/",
  validate(createConsultationSchema),
  consultationController.create,
);

// Các route quản lý của Admin (Đổi authMiddleware thành authentication)
router.get("/", authentication, consultationController.getAll); // <-- Dòng số 19 gây lỗi đã được sửa ở đây
router.put(
  "/:id",
  authentication,
  validate(updateConsultationSchema),
  consultationController.updateStatus, // ◄ Đổi từ .update thành .updateStatus
);
router.delete("/:id", authentication, consultationController.remove);

module.exports = router;
