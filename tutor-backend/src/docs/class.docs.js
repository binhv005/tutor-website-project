/**
 * @swagger
 * /api/classes:
 *   get:
 *     summary: Lấy danh sách toàn bộ lớp học (Có bộ lọc và phân trang)
 *     tags: [Classes]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Số trang hiện tại
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Số lượng bản ghi trên một trang
 *       - in: query
 *         name: subject
 *         schema:
 *           type: string
 *         description: Lọc theo môn học (Toán, Lý, Hóa...)
 *       - in: query
 *         name: grade
 *         schema:
 *           type: string
 *         description: Lọc theo khối học (Lớp 10, Lớp 11...)
 *     responses:
 *       200:
 *         description: Lấy danh sách lớp thành công
 */

/**
 * @swagger
 * /api/classes:
 *   post:
 *     summary: Tạo mới một lớp học (Yêu cầu đăng nhập Admin)
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subject
 *               - grade
 *               - studentName
 *               - parentPhone
 *               - tuition
 *             properties:
 *               subject:
 *                 type: string
 *                 example: "Hóa Học"
 *               grade:
 *                 type: string
 *                 example: "Lớp 11"
 *               studentName:
 *                 type: string
 *                 example: "Nguyễn Văn B"
 *               parentName:
 *                 type: string
 *                 example: "Nguyễn Văn A"
 *               parentPhone:
 *                 type: string
 *                 example: "0987654321"
 *               address:
 *                 type: string
 *                 example: "123 Đường Lê Lợi, Quận 1"
 *               tuition:
 *                 type: number
 *                 example: 200000
 *               weeklySessions:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         description: Tạo lớp học thành công
 *       400:
 *         description: Dữ liệu đầu vào không hợp lệ (Zod lỗi)
 *       401:
 *         description: Chưa đăng nhập hoặc Token hết hạn
 */

/**
 * @swagger
 * /api/classes/{id}:
 *   put:
 *     summary: Cập nhật thông tin lớp học (Yêu cầu đăng nhập Admin)
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của lớp học cần sửa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *                 example: "Hóa Học Nâng Cao"
 *               tuition:
 *                 type: number
 *                 example: 250000
 *     responses:
 *       200:
 *         description: Cập nhật thông tin lớp thành công
 *       404:
 *         description: Không tìm thấy thông tin lớp học cần sửa
 */

/**
 * @swagger
 * /api/classes/{id}:
 *   delete:
 *     summary: Xóa một lớp học khỏi hệ thống (Yêu cầu đăng nhập Admin)
 *     tags: [Classes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của lớp học cần xóa
 *     responses:
 *       200:
 *         description: Xóa lớp thành công
 *       404:
 *         description: Không tìm thấy lớp học để xóa
 */
