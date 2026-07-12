const classService = require("../services/class.service");

exports.createClass = async (req, res) => {
  try {
    const newClass = await classService.createClass(req.user.id, req.body);

    return res.status(201).json({
      success: true,
      message: "Tạo lớp thành công",
      data: newClass,
    });
  } catch (err) {
    console.error(err);

    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await classService.getClasses(req.query);

    return res.status(200).json({
      success: true,
      message: "Lấy danh sách lớp thành công",
      data: classes,
    });
  } catch (err) {
    console.error(err);

    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const updated = await classService.updateClass(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Cập nhật thành công",
      data: updated,
    });
  } catch (err) {
    console.error(err);

    return res.status(err.statusCode || 400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    await classService.deleteClass(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Xóa lớp thành công",
      data: null,
    });
  } catch (err) {
    console.error(err);

    return res.status(err.statusCode || 400).json({
      success: false,
      message: err.message,
    });
  }
};
