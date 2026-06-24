const jwt = require("jsonwebtoken");
// 1.
//  lấy token từ header
const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // kiểm tra có gửi token không
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "User khong gui token" });

  // giai ma token
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Loi server" });
  }
};

const checkRole = (allowedRole) => {
  return (req, res, next) => {
    const role = req.user.role;
    try {
      if (allowedRole.includes(role)) return next();
      else return res.status(403).json({ msg: "Ban khong co quyen truy cap" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Loi server" });
    }
  };
};

module.exports = {
  authorize,
  checkRole,
};
