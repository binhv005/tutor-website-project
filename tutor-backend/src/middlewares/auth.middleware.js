const jwt = require("jsonwebtoken");

// Kiểm tra user đã đăng nhập chưa
const authentication = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({
      message: "Chưa đăng nhập",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);

    return res.status(401).json({
      message: "Phiên đăng nhập hết hạn",
    });
  }
};

// Kiểm tra quyền
const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Chưa xác thực",
        });
      }

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Bạn không có quyền truy cập",
        });
      }

      next();
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Lỗi server",
      });
    }
  };
};

module.exports = {
  authentication,
  checkRole,
};
