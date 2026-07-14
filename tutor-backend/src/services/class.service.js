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
  const { page, limit, subject, grade, status } = query;

  const currentPage = parseInt(page) || 1;
  const itemsPerPage = parseInt(limit) || 10;
  const skip = (currentPage - 1) * itemsPerPage;

  // Xây dựng object điều kiện lọc
  const where = {};

  if (subject) {
    where.subject = { contains: subject, mode: "insensitive" };
  }
  if (grade) {
    where.grade = { contains: grade, mode: "insensitive" };
  }
  if (status) {
    where.status = status;
  }

  const [items, total] = await Promise.all([
    prisma.class.findMany({
      where,
      skip,
      take: itemsPerPage,
      orderBy: { createdAt: "desc" },
    }),
    prisma.class.count({ where }),
  ]);

  return {
    items,
    pagination: {
      total,
      page: currentPage,
      limit: itemsPerPage,
      totalPages: Math.ceil(total / itemsPerPage),
    },
  };
};

exports.updateClass = async (classId, updateData) => {
  const idAsInt = parseInt(classId, 10);

  if (isNaN(idAsInt)) {
    throw new AppError("ID lớp học phải là một số nguyên hợp lệ", 400);
  }

  // Kiểm tra xem lớp học có tồn tại không
  const existedClass = await prisma.class.findUnique({
    where: { id: idAsInt },
  });

  if (!existedClass) {
    throw new AppError("Không tìm thấy lớp học yêu cầu", 404);
  }

  // Tiến hành cập nhật
  return await prisma.class.update({
    where: { id: idAsInt },
    data: updateData,
  });
};

exports.deleteClass = async (classId) => {
  const idAsInt = parseInt(classId, 10);

  if (isNaN(idAsInt)) {
    throw new AppError("ID lớp học phải là một số nguyên hợp lệ", 400);
  }

  const existedClass = await prisma.class.findUnique({
    where: { id: idAsInt },
  });

  if (!existedClass) {
    throw new AppError("Không tìm thấy lớp học yêu cầu để xóa", 404);
  }

  return await prisma.class.delete({
    where: { id: idAsInt },
  });
};
