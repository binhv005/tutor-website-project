const classService = require("../services/class.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/response");
const AppError = require("../utils/AppError");

exports.getClasses = asyncHandler(async (req, res) => {
  const classes = await classService.getClasses(req.query);
  return successResponse(res, classes, "Lấy danh sách lớp thành công");
});

exports.createClass = asyncHandler(async (req, res) => {
  const newClass = await classService.createClass(req.user.id, req.body);
  return successResponse(res, newClass, "Tạo lớp thành công", 201);
});

exports.updateClass = asyncHandler(async (req, res) => {
  const result = await classService.updateClass(req.params.id, req.body);

  return successResponse(res, result, "Cập nhật lớp học thành công");
});

exports.deleteClass = asyncHandler(async (req, res) => {
  await classService.deleteClass(req.params.id);
  return successResponse(res, null, "Xóa lớp thành công");
});
