/**
 * @swagger
 * /api/consultations:
 *   post:
 *     summary: Khách hàng gửi form yêu cầu tư vấn
 *     tags: [Consultations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - subject
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nguyễn Văn A"
 *               phone:
 *                 type: string
 *                 example: "0912345678"
 *               grade:
 *                 type: string
 *                 example: "Lớp 10"
 *               subject:
 *                 type: string
 *                 example: "Toán Học"
 *               message:
 *                 type: string
 *                 example: "Tôi muốn tìm gia sư dạy kèm hình học"
 *     responses:
 *       201:
 *         description: Gửi yêu cầu tư vấn thành công
 *       400:
 *         description: Dữ liệu đầu vào không hợp lệ (Zod chặn)
 */

/**
 * @swagger
 * /api/consultations:
 *   get:
 *     summary: Admin lấy danh sách các yêu cầu tư vấn (Có phân trang)
 *     tags: [Consultations]
 *     security:
 *       - bearerAuth: []
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
 *     responses:
 *       200:
 *         description: Lấy danh sách thành công
 *       401:
 *         description: Không có quyền truy cập (Chưa đăng nhập hoặc thiếu token)
 */

/**
 * @swagger
 * /api/consultations/{id}:
 *   put:
 *     summary: Admin cập nhật trạng thái yêu cầu tư vấn
 *     tags: [Consultations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của yêu cầu tư vấn
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [PENDING, CONFIRMED, CANCELLED]
 *                 example: "CONFIRMED"
 *     responses:
 *       200:
 *         description: Cập nhật trạng thái thành công
 *       400:
 *         description: Dữ liệu trạng thái không hợp lệ
 *       404:
 *         description: Không tìm thấy yêu cầu tư vấn
 */

/**
 * @swagger
 * /api/consultations/{id}:
 *   delete:
 *     summary: Admin xóa yêu cầu tư vấn
 *     tags: [Consultations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của yêu cầu tư vấn cần xóa
 *     responses:
 *       200:
 *         description: Xóa yêu cầu tư vấn thành công
 *       404:
 *         description: Không tìm thấy dữ liệu để xóa
 */
