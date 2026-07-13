const consultationService = require("../services/consultation.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/response");

// 1. Khách hàng gửi form tư vấn (Khớp với controller.create)
exports.create = asyncHandler(async (req, res) => {
  const newConsultation = await consultationService.createConsultation(
    req.body,
  );
  return successResponse(
    res,
    newConsultation,
    "Gửi yêu cầu tư vấn thành công",
    201,
  );
});

// 2. Admin lấy danh sách (Khớp với controller.getAll)
exports.getAll = asyncHandler(async (req, res) => {
  const consultations = await consultationService.getConsultations(req.query);
  return successResponse(
    res,
    consultations,
    "Lấy danh sách yêu cầu tư vấn thành công",
  );
});

// 3. Admin cập nhật trạng thái (Khớp với controller.updateStatus)
exports.updateStatus = asyncHandler(async (req, res) => {
  const updated = await consultationService.updateStatus(
    req.params.id,
    req.body,
  );
  return successResponse(res, updated, "Cập nhật trạng thái tư vấn thành công");
});

// 4. Admin xóa yêu cầu (Khớp với controller.remove)
exports.remove = asyncHandler(async (req, res) => {
  await consultationService.deleteConsultation(req.params.id);
  return successResponse(res, null, "Xóa yêu cầu tư vấn thành công");
});
