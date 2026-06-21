const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");

exports.register = async (req, res) => {
  const { email, password, username, role_id } = req.body;
  try {
    // Kiểm tra đầu vào
    if (!email || !password || !username || !role_id)
      return res
        .status(400)
        .json({ message: "Vui lòng nhập đầy đủ thông tin" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Yêu cầu mật khẩu phải trên 6 ký tự" });

    // Kiểm tra trùng email
    const existEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existEmail)
      return res.status(400).json({ message: "Email đã tồn tại" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo user mới
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        user_roles: {
          create: {
            role_id: Number(role_id), // Tạo mqh cho bảng trung gian
          },
        },
      },
    });

    // Bỏ password trước khi gửi cho Client
    const { password: _, ...userWithoutPassword } = newUser;

    // Thông báo đăng ký thành công
    res
      .status(201)
      .json({ message: "Đăng ký thành công", user: userWithoutPassword });
  } catch (error) {
    console.error("Lỗi đăng ký", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, email, password, user_roles } = req.body;

    // Kiểm tra đầu vào
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email và mật khẩu không được để trống" });

    // Kiểm tra email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        user_roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user)
      return res.status(400).json({ message: "Sai email hoặc mật khẩu" });

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Sai email hoặc mật khẩu" });

    const roleArr = user.user_roles.map((ur) => ur.role.name);
    const token = jwt.sign(
      {
        id: user.user_id,
        email: user.email,
        role: roleArr,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
