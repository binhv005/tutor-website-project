import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import api from "../api/axios";

export default function ConsultationForm() {
  const [focusedField, setFocusedField] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "Tiểu học",
    subject: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");
      setIsSuccess(false);

      const response = await api.post("/consultations", formData);

      setIsSuccess(true);

      setMessage(response.data.message || "Gửi tư vấn thành công");

      // reset form

      setFormData({
        name: "",
        phone: "",
        grade: "Tiểu học",
        subject: "",
      });
    } catch (error) {
      console.log(error);

      setIsSuccess(false);

      setMessage("Gửi tư vấn thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
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

      {message && (
        <div
          className={`
              mb-4
              p-3
              rounded-lg
              text-sm
              font-medium
              ${
                isSuccess
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }
            `}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME */}

        <div>
          <label className={getLabelClass("name")}>Họ và tên phụ huynh</label>

          <input
            type="text"
            placeholder="Nguyễn Văn A"
            className="
              w-full 
              bg-neutral 
              px-4 
              py-3 
              rounded-lg 
              border-0 
              focus:ring-2 
              focus:ring-tertiary 
              transition-all 
              outline-none 
              text-sm
            "
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
              });
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

        {/* PHONE */}

        <div>
          <label className={getLabelClass("phone")}>
            Số điện thoại liên hệ
          </label>

          <input
            type="tel"
            placeholder="090x xxx xxx"
            className="
              w-full 
              bg-neutral 
              px-4 
              py-3 
              rounded-lg 
              border-0 
              focus:ring-2 
              focus:ring-tertiary 
              transition-all 
              outline-none 
              text-sm
            "
            value={formData.phone}
            onChange={(e) => {
              setFormData({
                ...formData,
                phone: e.target.value,
              });
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
          {/* GRADE */}

          <div>
            <label className={getLabelClass("grade")}>Lớp của con</label>

            <select
              className="
              w-full 
              bg-neutral 
              px-4 
              py-3 
              rounded-lg 
              border-0 
              focus:ring-2 
              focus:ring-tertiary 
              transition-all 
              outline-none 
              text-sm
              "
              value={formData.grade}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  grade: e.target.value,
                });
              }}
            >
              <option>Tiểu học</option>

              <option>THCS</option>

              <option>THPT</option>

              <option>Luyện thi</option>
            </select>
          </div>

          {/* SUBJECT */}

          <div>
            <label className={getLabelClass("subject")}>Môn học quan tâm</label>

            <input
              type="text"
              placeholder="Toán, Anh..."
              className="
              w-full 
              bg-neutral 
              px-4 
              py-3 
              rounded-lg 
              border-0 
              focus:ring-2 
              focus:ring-tertiary 
              transition-all 
              outline-none 
              text-sm
              "
              value={formData.subject}
              onChange={(e) => {
                setFormData({
                  ...formData,

                  subject: e.target.value,
                });
              }}
              onFocus={() => {
                setFocusedField("subject");
              }}
              onBlur={() => {
                setFocusedField(null);
              }}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
          w-full 
          bg-primary 
          text-white 
          py-4 
          rounded-xl 
          font-bold 
          text-sm 
          flex 
          items-center 
          justify-center 
          gap-2 
          hover:bg-primary/90 
          active:scale-[0.99] 
          transition-all 
          mt-4
          cursor-pointer
          disabled:opacity-50
          "
        >
          {loading ? (
            "ĐANG GỬI..."
          ) : (
            <>
              GỬI YÊU CẦU TƯ VẤN
              <FontAwesomeIcon icon={faArrowRight} />
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-headline/60 mt-4">
          Bằng việc gửi thông tin, bạn đồng ý với các Điều khoản bảo mật của
          chúng tôi.
        </p>
      </form>
    </div>
  );
}
