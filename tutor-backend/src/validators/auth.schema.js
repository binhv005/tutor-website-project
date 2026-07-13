const { z } = require("zod");

// 1. Schema validate cho chức năng Đăng nhập (Login) - GIỮ NGUYÊN
exports.loginSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "Tên đăng nhập không được để trống" })
      .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
      .max(50, "Tên đăng nhập không được vượt quá 50 ký tự")
      .trim(),
    password: z
      .string({ required_error: "Mật khẩu không được để trống" })
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  }),
});

// 2. Schema validate cho chức năng Đổi mật khẩu (Change Password) - ĐÃ SỬA
exports.changePasswordSchema = z.object({
  body: z
    .object({
      oldPassword: z
        .string({ required_error: "Vui lòng nhập mật khẩu cũ" })
        .min(6, "Mật khẩu cũ phải có ít nhất 6 ký tự"),
      newPassword: z
        .string({ required_error: "Vui lòng nhập mật khẩu mới" })
        .min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
    })
    .refine((data) => data.newPassword !== data.oldPassword, {
      message: "Mật khẩu mới không được trùng với mật khẩu cũ",
      path: ["newPassword"], // Báo lỗi chuẩn vào trường newPassword
    }),
});
