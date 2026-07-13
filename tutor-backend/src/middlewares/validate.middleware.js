const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parsed = await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    req.body = parsed.body || req.body;
    req.query = parsed.query || req.query;
    req.params = parsed.params || req.params;

    return next();
  } catch (error) {
    // Kiểm tra nếu là lỗi của Zod hoặc đối tượng có chứa mảng errors
    if (
      error instanceof ZodError ||
      (error.errors && Array.isArray(error.errors))
    ) {
      return res.status(400).json({
        success: false,
        message: "Dữ liệu đầu vào không hợp lệ",
        // Dùng ?. để nếu error.errors bị undefined thì trả về [] chứ không sập app
        errors:
          error?.errors?.map((err) => ({
            // Ghép chuỗi các cấp thuộc tính bị lỗi (VD: body.email) an toàn
            field: err?.path?.length > 0 ? err.path.join(".") : "global",
            message: err.message,
          })) || [],
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Đã xảy ra lỗi hệ thống nghiêm trọng",
    });
  }
};

module.exports = validate;
