const prisma = require("../config/prisma");

exports.createClass = async (req, res) => {
  const { status, created_by, ...classData } = req.body;
  try {
    const hasEmptyField = Object.values(classData).some((value) => !value);
    if (hasEmptyField)
      return res
        .status(400)
        .json({ msg: "Không được để trống các trường dữ liệu" });
    const newClass = await prisma.class.create({
      data: {
        ...classData,
        created_by: req.user.id,
      },
    });
    return res.status(201).json({ msg: "Tạo lớp thành công" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Lỗi server" });
  }
};

exports.getClasses = async (req, res) => {
  const { subject, grade, area, status } = req.query;
  const whereConditions = {};
  if (subject) {
    where: {
      whereConditions.subject = subject;
    }
  }
  if (grade) {
    where: {
      whereConditions.grade = grade;
    }
  }
  if (area) {
    where: {
      whereConditions.area = area;
    }
  }
  if (status) {
    where: {
      whereConditions.status = status;
    }
  }
  try {
    const listClass = await prisma.class.findMany({
      where: whereConditions,
      select: {
        id: true,
        require: true,
        subject: true,
        grade: true,
        area: true,
        weekly_sessions: true,
        tuition: true,
        students: true,
        status: true,
        note: true,
      },
    });

    if (listClass.length === 0)
      return res.status(400).json({ msg: "Không tìm thấy lớp" });
    else return res.send(listClass);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Lỗi server" });
  }
};
