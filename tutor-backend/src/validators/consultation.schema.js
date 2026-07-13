const { z } = require("zod");

// Định nghĩa regex kiểm tra số điện thoại Việt Nam (10 số, bắt đầu bằng 0)
const phoneRegex = /^(0[3|5|7|8|9])+([0-8]{8})\b$/;

// 1. Schema validate khi khách hàng gửi yêu cầu tư vấn (Create)
exports.createConsultationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Họ tên không được để trống" })
      .min(2, "Họ tên phải từ 2 ký tự trở lên")
      .trim(),

    phone: z
      .string({ required_error: "Số điện thoại không được để trống" })
      .regex(phoneRegex, "Số điện thoại không đúng định dạng Việt Nam"),

    grade: z
      .string({ required_error: "Khối học không được để trống" })
      .min(1, "Lớp/Khối học không hợp lệ")
      .trim(),

    subject: z
      .string({ required_error: "Môn học không được để trống" })
      .min(1, "Môn học không hợp lệ")
      .trim(),

    message: z.string().trim().optional(), // Lời nhắn có thể có hoặc không
  }),
});

// 2. Schema validate khi Admin cập nhật trạng thái hoặc thông tin tư vấn (Update)
exports.updateConsultationSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Họ tên phải từ 2 ký tự trở lên").trim().optional(),
    phone: z
      .string()
      .regex(phoneRegex, "Số điện thoại không đúng định dạng")
      .optional(),
    grade: z.string().min(1).trim().optional(),
    subject: z.string().min(1).trim().optional(),
    message: z.string().trim().optional(),

    // Validate trạng thái dựa theo Enum Status trong schema.prisma (PENDING, CONTACTED)
    status: z
      .enum(["PENDING", "CONTACTED"], {
        errorMap: () => ({
          message: "Trạng thái phải là PENDING hoặc CONTACTED",
        }),
      })
      .optional(),
  }),
});
