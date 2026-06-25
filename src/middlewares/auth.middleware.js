const jwt = require("jsonwebtoken");
//  lấy token từ header
const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // kiểm tra có gửi token không
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Người dùng không gửi token" });

  // giải mã token
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Lỗi server" });
  }
};

const checkRole = (allowedRole) => {
  return (req, res, next) => {
    const role = req.user.role;
    try {
      if (allowedRole.includes(role)) return next();
      else return res.status(403).json({ msg: "Bạn không có quyền truy cập" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Lỗi server" });
    }
  };
};

module.exports = {
  authorize,
  checkRole,
};
