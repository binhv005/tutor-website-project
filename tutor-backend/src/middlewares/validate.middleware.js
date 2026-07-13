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

    return res.status(500).json({
      success: false,
      message: error.message || "Đã xảy ra lỗi hệ thống nghiêm trọng",
    });
  }
};

module.exports = validate;
