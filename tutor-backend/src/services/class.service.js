const prisma = require("../config/prisma");
const AppError = require("../utils/AppError");

// 1. Tạo lớp mới
exports.createClass = async (userId, classData) => {
  if (!userId) {
    throw new AppError("Người dùng chưa được xác thực", 401);
  }

  return await prisma.class.create({
    data: {
      ...classData,
      admin: {
        connect: { id: userId },
      },
    },
  });
};

// 2. Lấy danh sách lớp
exports.getClasses = async (query) => {
  const page = parseInt(query?.page) || 1;
  const limit = parseInt(query?.limit) || 10;
  const skip = (page - 1) * limit;

  return await prisma.class.findMany({
    skip: skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });
};
// 3. Cập nhật lớp học (ÉP KIỂU INT CHO ID)
exports.updateClass = async (classId, updateData) => {
  // Ép kiểu classId về số nguyên Int để khớp với database
  const idAsInt = parseInt(classId, 10);

  if (isNaN(idAsInt)) {
    throw new AppError("ID lớp học phải là một số nguyên hợp lệ", 400);
  }

  // Kiểm tra xem lớp học có tồn tại không
  const existedClass = await prisma.class.findUnique({
    where: { id: idAsInt }, // <-- Dùng idAsInt thay vì classId gốc
  });

  if (!existedClass) {
    throw new AppError("Không tìm thấy lớp học yêu cầu", 404);
  }

  // Tiến hành cập nhật
  return await prisma.class.update({
    where: { id: idAsInt }, // <-- Dùng idAsInt
    data: updateData,
  });
};

// 4. Xóa lớp học (ÉP KIỂU INT CHO ID)
exports.deleteClass = async (classId) => {
  // Ép kiểu classId về số nguyên Int
  const idAsInt = parseInt(classId, 10);

  if (isNaN(idAsInt)) {
    throw new AppError("ID lớp học phải là một số nguyên hợp lệ", 400);
  }

  const existedClass = await prisma.class.findUnique({
    where: { id: idAsInt }, // <-- Dùng idAsInt
  });

  if (!existedClass) {
    throw new AppError("Không tìm thấy lớp học yêu cầu để xóa", 404);
  }

  return await prisma.class.delete({
    where: { id: idAsInt }, // <-- Dùng idAsInt
  });
};
