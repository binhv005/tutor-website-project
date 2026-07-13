const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const {
  loginSchema,
  changePasswordSchema,
} = require("../validators/auth.schema");

// BÓC TÁCH CHÍNH XÁC HÀM ĐĂNG NHẬP TỪ OBJECT MIDDLEWARE
const { authentication } = require("../middlewares/auth.middleware");

// Áp dụng validate vào route login (Hoạt động mượt mà)
router.post("/login", validate(loginSchema), authController.login);

// MỞ LẠI ROUTE ĐỔI MẬT KHẨU - THAY authMiddleware THÀNH authentication
router.post(
  "/change-password",
  authentication, // <--- Đã sửa ở đây
  validate(changePasswordSchema),
  authController.changePassword,
);

module.exports = router;
