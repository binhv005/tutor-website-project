const prisma = require("../config/prisma");
const AppError = require("../utils/AppError");

// 1. Lấy danh sách từ Database (Dành cho Admin)
exports.getConsultations = async (query) => {
  const page = parseInt(query?.page, 10) || 1;
  const limit = parseInt(query?.limit, 10) || 10;
  const skip = (page - 1) * limit;

  return await prisma.consultation.findMany({
    skip: skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
};

// 2. Khách hàng tạo mới yêu cầu tư vấn
exports.createConsultation = async (consultationData) => {
  return await prisma.consultation.create({
    data: {
      name: consultationData.name,
      phone: consultationData.phone,
      grade: consultationData.grade,
      subject: consultationData.subject,
      message: consultationData.message,
      status: "PENDING",
    },
  });
};

// 3. Cập nhật trạng thái tư vấn
exports.updateStatus = async (consultationId, updateData) => {
  const idAsInt = parseInt(consultationId, 10);
  if (isNaN(idAsInt)) throw new AppError("ID không hợp lệ", 400);

  const existed = await prisma.consultation.findUnique({
    where: { id: idAsInt },
  });
  if (!existed)
    throw new AppError("Không tìm thấy dữ liệu yêu cầu tư vấn", 404);

  return await prisma.consultation.update({
    where: { id: idAsInt },
    data: updateData,
  });
};

// 4. Xóa yêu cầu tư vấn
exports.deleteConsultation = async (consultationId) => {
  const idAsInt = parseInt(consultationId, 10);
  if (isNaN(idAsInt)) throw new AppError("ID không hợp lệ", 400);

  const existed = await prisma.consultation.findUnique({
    where: { id: idAsInt },
  });
  if (!existed) throw new AppError("Không tìm thấy dữ liệu để xóa", 404);

  return await prisma.consultation.delete({ where: { id: idAsInt } });
};
