import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ConsultationForm() {
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "Tiểu học",
    subject: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted: ", formData);
  }

  function getLabelClass(field) {
    return `block text-xs font-medium mb-1.5 transition-colors duration-200 ${
      focusedField === field ? "text-tertiary font-bold" : "text-headline/70"
    }`;
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl border border-headline/10">
      <h2 className="text-2xl font-bold text-headline mb-2">
        Đăng ký tư vấn miễn phí
      </h2>
      <p className="text-sm text-headline/70 mb-6">
        Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 15 phút.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={getLabelClass("name")}>Họ và tên phụ huynh</label>
          <input
            type="text"
            placeholder="Nguyễn Văn A"
            className="w-full bg-neutral px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            onFocus={() => {
              setFocusedField("name");
            }}
            onBlur={() => {
              setFocusedField(null);
            }}
            required
          />
        </div>
        <div>
          <label className={getLabelClass("phone")}>
            Số điện thoại liên hệ
          </label>
          <input
            type="tel"
            placeholder="090x xxx xxx"
            className="w-full bg-neutral px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
            onFocus={() => {
              setFocusedField("phone");
            }}
            onBlur={() => {
              setFocusedField(null);
            }}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={getLabelClass("grade")}>Lớp của con</label>
            <select
              className="w-full bg-neutral px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm appearance-none"
              value={formData.grade}
              onChange={(e) => {
                setFormData({ ...formData, grade: e.target.value });
              }}
              onFocus={() => {
                setFocusedField("grade");
              }}
              onBlur={() => {
                setFocusedField(null);
              }}
            >
              <option>Tiểu học</option>
              <option>THCS</option>
              <option>THPT</option>
              <option>Luyện thi</option>
            </select>
          </div>
          <div>
            <label className={getLabelClass("subject")}>Môn học quan tâm</label>
            <input
              type="text"
              placeholder="Toán, Anh..."
              className="w-full bg-neutral px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
              onFocus={() => {
                setFocusedField("subject");
              }}
              onBlur={() => {
                setFocusedField(null);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.99] transition-all group mt-4 cursor-pointer"
        >
          GỬI YÊU CẦU TƯ VẤN
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <p className="text-[10px] text-center text-headline/60 mt-4">
          Bằng việc gửi thông tin, bạn đồng ý với các Điều khoản bảo mật của
          chúng tôi.
        </p>
      </form>
    </div>
  );
}
