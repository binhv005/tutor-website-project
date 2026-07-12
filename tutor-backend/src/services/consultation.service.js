const service = require("../services/consultation.service");
const { successResponse, errorResponse } = require("../utils/response");

exports.create = async (req, res) => {
  try {
    const result = await service.createConsultation(req.body);

    return successResponse(res, result, "Gửi tư vấn thành công", 201);
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await service.getConsultations();

    return successResponse(res, data, "Lấy danh sách tư vấn thành công");
  } catch (error) {
    return errorResponse(res, "Unable to load consultations", 500);
  }
};

exports.update = async (req, res) => {
  try {
    const result = await service.updateConsultation(req.params.id, req.body);

    return successResponse(res, result, "Cập nhật tư vấn thành công");
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

exports.remove = async (req, res) => {
  try {
    await service.deleteConsultation(req.params.id);

    return successResponse(res, null, "Xóa liên hệ thành công");
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};
