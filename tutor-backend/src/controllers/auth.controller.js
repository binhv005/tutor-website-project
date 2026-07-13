const authService = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/response");

const cookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60, // 1 giờ
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

// 1. Đăng nhập hệ thống
exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const result = await authService.login(username, password);

  // Lưu token vào HTTP-only cookie bảo mật
  res.cookie("accessToken", result.token, cookieOptions);

  return successResponse(res, result.user, "Đăng nhập thành công");
});

// 2. Đổi mật khẩu tài khoản
exports.changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  await authService.changePassword(req.user.id, oldPassword, newPassword);

  return successResponse(res, null, "Đổi mật khẩu thành công");
});
