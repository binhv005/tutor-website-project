const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError"); // Import AppError chuẩn hóa xử lý lỗi

exports.login = async (username, password) => {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  // Thay vì lỗi 500 hệ thống, trả về 401 Unauthorized khi sai tài khoản
  if (!user) {
    throw new AppError("Sai tài khoản hoặc mật khẩu", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  // Trả về 401 Unauthorized khi sai mật khẩu
  if (!isMatch) {
    throw new AppError("Sai tài khoản hoặc mật khẩu", 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    },
  };
};

exports.changePassword = async (userId, oldPassword, newPassword) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  // Trả về 404 Not Found nếu không tìm thấy user hợp lệ
  if (!user) {
    throw new AppError("Không tìm thấy tài khoản", 404);
  }

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  // Trả về 400 Bad Request nếu mật khẩu cũ không khớp
  if (!isMatch) {
    throw new AppError("Mật khẩu cũ không đúng", 400);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });
};
