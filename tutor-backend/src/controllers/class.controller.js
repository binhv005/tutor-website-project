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

exports.applyClass = async (req, res) => {
  try {
    const classCheck = await prisma.class.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!classCheck || classCheck.status !== "AVAILABLE")
      return res.status(400).json({ msg: "Lớp đã có gia sư" });
    const appliedClass = await prisma.application.create({
      data: {
        tutor_id: req.user.id,
        class_id: parseInt(req.params.id),
      },
    });
    res.status(200).json({ msg: "Đang chờ duyệt đăng ký" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Lỗi server" });
  }
};

exports.updateApplies = async (req, res) => {
  const { action } = req.body;
  try {
    if (action === "reject") {
      const rejectApply = await prisma.application.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: { status: "REJECT" },
      });
      res.status(200).json({ msg: "Yêu cầu đăng ký đã bị từ chối" });
    }

    if (action === "accept") {
      const acceptApply = await prisma.application.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: { status: "ACCEPT" },
      });
      res.status(200).json({ msg: "Yêu cầu đăng ký đã được chấp nhận" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Lỗi server" });
  }
};
