import { useEffect, useState } from "react";

const createDefaultForm = () => ({
  id: null,
  teacherRequirement: "",
  subject: "",
  grade: "",
  address: "",
  weeklySessions: "",
  tuition: "",
  parentName: "",
  parentPhone: "",
  note: "",
  status: "AVAILABLE",
});

function ClassFormModal({ open, onClose, onSubmit, initialData }) {
  const [form, setForm] = useState(createDefaultForm());

  const [loading, setLoading] = useState(false);

  // Load data khi edit
  useEffect(() => {
    if (initialData) {
      setForm({
        id: initialData.id,

        teacherRequirement: initialData.teacherRequirement || "",

        subject: initialData.subject || "",

        grade: initialData.grade || "",

        address: initialData.address || "",

        weeklySessions: initialData.weeklySessions || "",

        tuition: initialData.tuition || "",

        parentName: initialData.parentName || "",

        parentPhone: initialData.parentPhone || "",

        note: initialData.note || "",

        status: initialData.status || "AVAILABLE",
      });
    } else {
      setForm(createDefaultForm());
    }
  }, [initialData, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      await onSubmit({
        ...form,

        tuition: form.tuition,
      });

    } catch (error) {
      console.error("Submit class error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
      fixed
      inset-0
      z-50
      bg-black/40
      flex
      items-center
      justify-center
      p-4
      "
    >
      <div
        className="
        bg-white
        rounded-xl
        shadow-xl
        w-full
        max-w-3xl
        max-h-[90vh]
        overflow-y-auto
        "
      >
        {/* Header */}

        <div
          className="
          border-b
          px-6
          py-4
          "
        >
          <h2
            className="
            text-xl
            font-bold
            "
          >
            {initialData ? "Cập nhật lớp học" : "Tạo lớp học"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
          p-6
          space-y-5
          "
        >
          {/* Subject + Grade */}

          <div
            className="
            grid
            md:grid-cols-2
            gap-4
            "
          >
            <div>
              <label className="text-sm font-medium">Môn học</label>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Khối lớp</label>

              <input
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>
          </div>

          {/* Address */}

          <div>
            <label className="text-sm font-medium">Địa chỉ</label>

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="
              mt-2
              w-full
              border
              rounded-lg
              px-4
              py-3
              "
              required
            />
          </div>

          {/* Tuition + Sessions */}

          <div
            className="
            grid
            md:grid-cols-2
            gap-4
            "
          >
            <div>
              <label className="text-sm font-medium">Học phí</label>

              <input
                type="text"
                name="tuition"
                value={form.tuition}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Số buổi / tuần</label>

              <input
                type="text"
                name="weeklySessions"
                value={form.weeklySessions}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Yêu cầu gia sư</label>

            <textarea
              rows="3"
              name="teacherRequirement"
              value={form.teacherRequirement}
              onChange={handleChange}
              className="
              mt-2
              w-full
              border
              rounded-lg
              px-4
              py-3
              "
              required
            />
          </div>

          <div
            className="
            grid
            md:grid-cols-2
            gap-4
            "
          >
            <div>
              <label className="text-sm font-medium">Tên phụ huynh</label>

              <input
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Số điện thoại</label>

              <input
                name="parentPhone"
                value={form.parentPhone}
                onChange={handleChange}
                className="
                mt-2
                w-full
                border
                rounded-lg
                px-4
                py-3
                "
                required
              />
            </div>
          </div>

          {/* Note */}

          <div>
            <label className="text-sm font-medium">Ghi chú</label>

            <textarea
              rows="3"
              name="note"
              value={form.note}
              onChange={handleChange}
              className="
              mt-2
              w-full
              border
              rounded-lg
              px-4
              py-3
              "
            />
          </div>

          {/* Status */}

          <div>
            <label className="text-sm font-medium">Trạng thái</label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={`
              mt-2
              w-full
              rounded-lg
              border
              px-4
              py-3

              ${
                form.status === "AVAILABLE"
                  ? "border-yellow-300 bg-yellow-50 text-yellow-700"
                  : "border-green-300 bg-green-50 text-green-700"
              }

              `}
            >
              <option value="AVAILABLE">Đang tuyển</option>

              <option value="ASSIGNED">Đã có gia sư</option>
            </select>
          </div>

          {/* Button */}

          <div
            className="
            flex
            justify-end
            gap-3
            pt-2
            "
          >
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="
              px-5
              py-3
              rounded-lg
              border
              "
            >
              Huỷ
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
              px-5
              py-3
              rounded-lg
              bg-primary
              text-white
              "
            >
              {loading ? "Đang lưu..." : initialData ? "Cập nhật" : "Tạo lớp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClassFormModal;
