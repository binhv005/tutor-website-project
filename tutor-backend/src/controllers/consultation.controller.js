const service = require("../services/consultation.service");

exports.create = async (req, res) => {
  try {
    const result = await service.createConsultation(req.body);

    return res.status(201).json({
      success: true,
      message: "Gửi tư vấn thành công",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await service.getConsultations();

    return res.status(200).json({
      success: true,
      message: "Lấy danh sách tư vấn thành công",
      data: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Unable to load consultations",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const result = await service.updateConsultation(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Cập nhật tư vấn thành công",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.deleteConsultation(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Xóa liên hệ thành công",
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
