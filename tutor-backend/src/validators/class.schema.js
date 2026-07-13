const { z } = require("zod");

// Định nghĩa regex kiểm tra số điện thoại Việt Nam (chấp nhận từ 0-9)
const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})\b$/;

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
      .trim()
      // Cho phép 1 hoặc nhiều khoảng trắng (\s+), cho phép mọi ký tự ở cuối (.*)
      .regex(
        /^\d+\s*[a-zA-Zà-ỹÀ-Ỹ]+\/[a-zA-Zà-ỹÀ-Ỹ]+.*$/,
        "Định dạng không hợp lệ. Ví dụ: 3 buổi/tuần Thứ 2 3 4",
      )
      .min(1, "Không được để trống"),

    tuition: z
      .string({ required_error: "Học phí là bắt buộc" })
      .trim()
      // Thêm 'ổ' vào danh sách cho phép, cờ 'i' để không phân biệt hoa thường
      .regex(
        /^\d+[\d\.,]*(k|tr|triệu|đ|l)?\/(buổi|buoi|tháng|tuần|ngày)$/i,
        "Định dạng học phí không hợp lệ. Ví dụ: 120k/buổi, 3tr/tháng",
      )
      .min(1, "Học phí không được để trống"),

    note: z.string().trim().optional(),

    parentName: z
      .string({ required_error: "Tên phụ huynh là bắt buộc" })
      .min(2, "Tên phụ huynh phải từ 2 ký tự trở lên")
      .trim(),

    parentPhone: z
      .string({ required_error: "Số điện thoại phụ huynh là bắt buộc" })
      .regex(phoneRegex, "Số điện thoại không đúng định dạng Việt Nam"),
  }),
});

// Schema dùng để validate dữ liệu khi Admin cập nhật (Cho phép thiếu các trường)
exports.updateClassSchema = z.object({
  body: exports.createClassSchema.shape.body.partial(),
});
