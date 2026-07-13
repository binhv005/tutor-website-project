const classService = require("../services/class.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/response");

// 1. Lấy danh sách lớp
exports.getClasses = asyncHandler(async (req, res) => {
  const classes = await classService.getClasses(req.query);
  return successResponse(res, classes, "Lấy danh sách lớp thành công");
});

// 2. Tạo lớp mới
exports.createClass = asyncHandler(async (req, res) => {
  const newClass = await classService.createClass(req.user.id, req.body);
  return successResponse(res, newClass, "Tạo lớp thành công", 201);
});

// 3. Cập nhật lớp học
exports.updateClass = asyncHandler(async (req, res) => {
  const classId = req.params?.id;

  if (!classId) {
    return res.status(400).json({
      success: false,
      message: "Thiếu ID lớp học trên đường dẫn URL",
    });
  }

  const updated = await classService.updateClass(classId, req.body);
  return successResponse(res, updated, "Cập nhật thành công");
});

// 4. Xóa lớp học
exports.deleteClass = asyncHandler(async (req, res) => {
  await classService.deleteClass(req.params.id);
  return successResponse(res, null, "Xóa lớp thành công");
});
