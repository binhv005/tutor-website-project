const authService = require("../services/auth.service");

const cookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60, // 1 giờ
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Tạm thời giữ lại validate thuần trước khi nâng cấp lên Zod ở bước sau
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập và mật khẩu không được để trống",
      });
    }

    const result = await authService.login(username, password);

    // Lưu token vào HTTP-only cookie bảo mật
    res.cookie("accessToken", result.token, cookieOptions);

    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      data: result.user,
    });
  } catch (error) {
    console.error(error);

    return res.status(error.statusCode || 401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập đầy đủ thông tin",
      });
    }

    await authService.changePassword(req.user.id, oldPassword, newPassword);

    return res.status(200).json({
      success: true,
      message: "Đổi mật khẩu thành công",
      data: null,
    });
  } catch (error) {
    console.error(error);

    return res.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }
};
