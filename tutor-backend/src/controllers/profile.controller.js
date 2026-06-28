const prisma = require("../config/prisma");

exports.updateProfile = async (req, res) => {
  try {
    const {
      dob,
      gender,
      phone,
      address,
      level,
      current_school,
      graduation_year,
      avatar,
    } = req.body;

    const profileData = {
      dob,
      gender,
      phone,
      address,
      level,
      current_school,
      graduation_year,
      avatar,
    };
    const tutorProfile = await prisma.profile.upsert({
      where: {
        user_id: req.user.id,
      },
      create: {
        user_id: req.user.id,
        ...profileData,
      },
      update: {
        ...profileData,
      },
    });
    res.status(200).json({ msg: "Cập nhật thông tin thành công" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Lỗi server" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const tutorProfile = await prisma.profile.findUnique({
      where: {
        user_id: req.user.id,
      },
    });
    if (!tutorProfile)
      return res.status(404).json({ msg: "Hồ sơ chưa được khởi tạo" });
    else return res.send(tutorProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Lỗi server" });
  }
};
