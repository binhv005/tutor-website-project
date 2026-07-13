import { useState } from "react";

function EditContactModal({ contact, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: contact.name,

    phone: contact.phone,

    grade: contact.grade,

    subject: contact.subject,

    status: contact.status,
  });

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave(contact.id, formData);
  }

  return (
    <div
      className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"
    >
      <div
        className="
bg-white
rounded-xl
p-6
w-[450px]
shadow-xl
"
      >
        <h2
          className="
text-xl
font-bold
mb-5
"
        >
          Sửa thông tin tư vấn
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          >
            <option>Tiểu học</option>

            <option>THCS</option>

            <option>THPT</option>

            <option>Luyện thi</option>
          </select>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
w-full
border
rounded-lg
px-3
py-2
"
          >
            <option value="PENDING">Chưa liên hệ</option>

            <option value="CONTACTED">Đã liên hệ</option>
          </select>

          <div
            className="
flex
justify-end
gap-3
mt-5
"
          >
            <button
              type="button"
              onClick={onClose}
              className="
px-4
py-2
rounded-lg
border
"
            >
              Hủy
            </button>

            <button
              type="submit"
              className="
px-4
py-2
rounded-lg
bg-primary
text-white
"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContactModal;
