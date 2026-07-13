const { z } = require("zod");

// Định nghĩa regex kiểm tra số điện thoại Việt Nam cơ bản (10 số, bắt đầu bằng 0)
const phoneRegex = /^(0[3|5|7|8|9])+([0-8]{8})\b$/;

exports.createClassSchema = z.object({
  body: z.object({
    teacherRequirement: z
      .string({ required_error: "Yêu cầu gia sư không được để trống" })
      .min(5, "Yêu cầu gia sư phải chi tiết một chút (ít nhất 5 ký tự)")
      .trim(),

    subject: z
      .string({ required_error: "Môn học là bắt buộc" })
      .min(1, "Môn học không được để trống")
      .trim(),

    grade: z
      .string({ required_error: "Khối học là bắt buộc" })
      .min(1, "Khối học không được để trống")
      .trim(),

    address: z
      .string({ required_error: "Địa chỉ là bắt buộc" })
      .min(5, "Địa chỉ phải cụ thể (ít nhất 5 ký tự)")
      .trim(),

    weeklySessions: z
      .string({ required_error: "Số buổi trên tuần là bắt buộc" })
      .min(1, "Số buổi không được để trống")
      .trim(),

    tuition: z
      .string({ required_error: "Học phí là bắt buộc" })
      .min(1, "Học phí không được để trống")
      .trim(),

    note: z.string().trim().optional(), // Trường ghi chú có thể truyền hoặc không

    parentName: z
      .string({ required_error: "Tên phụ huynh là bắt buộc" })
      .min(2, "Tên phụ huynh phải từ 2 ký tự trở lên")
      .trim(),

    parentPhone: z
      .string({ required_error: "Số điện thoại phụ huynh là bắt buộc" })
      .regex(phoneRegex, "Số điện thoại không đúng định dạng Việt Nam"),
  }),
});

// Schema dùng để validate dữ liệu khi Admin muốn cập nhật thông tin lớp (Cho phép truyền thiếu các trường)
exports.updateClassSchema = z.object({
  body: exports.createClassSchema.shape.body.partial(),
});
