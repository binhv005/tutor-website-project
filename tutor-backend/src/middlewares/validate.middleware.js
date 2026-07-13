const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    // Thực hiện parse và validate dữ liệu qua Zod
    const parsed = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    // MẸO: Dùng toán tử || để giữ lại dữ liệu gốc nếu Zod trả về undefined cho phân vùng đó
    req.body = parsed.body || req.body;
    req.query = parsed.query || req.query;
    req.params = parsed.params || req.params;

    return next();
  } catch (error) {
    // TRƯỜNG HỢP 1: Đúng lỗi validate dữ liệu của Zod (Thiếu trường, sai kiểu dữ liệu...)
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Dữ liệu đầu vào không hợp lệ",
        errors: error.errors.map((err) => ({
          field: err.path[1] || err.path[0] || "field",
          message: err.message,
        })),
      });
    }

    // TRƯỜNG HỢP 2: Các lỗi phát sinh từ Controller/Service hoặc lỗi hệ thống khác
    // Tuyệt đối KHÔNG sử dụng hàm .map() ở đây để tránh làm sập ứng dụng
    return res.status(500).json({
      success: false,
      message: error.message || "Đã xảy ra lỗi hệ thống nghiêm trọng",
    });
  }
};

module.exports = validate;
