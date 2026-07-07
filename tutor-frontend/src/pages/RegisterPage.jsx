import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("parent");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    password: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      alert("Yêu cầu đang được gửi đi. Vui lòng kiểm tra email sau vài phút.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-neutral text-gray-900 font-sans min-h-screen flex flex-col relative">
      <div className="pt-28 pb-12 px-4 sm:px-6 flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-[550px] bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-5 sm:p-8 text-center border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1.5">
              Bắt đầu hành trình
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Tham gia cùng cộng đồng giáo dục chuyên nghiệp tại Trung Tâm Đỗ
              Hằng
            </p>
          </div>

          <div className="flex border-b border-gray-200 bg-gray-50/50">
            <button
              type="button"
              className={`flex-1 py-3.5 text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                activeTab === "parent"
                  ? "border-primary text-primary bg-white"
                  : "border-transparent text-gray-500 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("parent")}
            >
              Dành cho Phụ huynh
            </button>
            <button
              type="button"
              className={`flex-1 py-3.5 text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                activeTab === "tutor"
                  ? "border-primary text-primary bg-white"
                  : "border-transparent text-gray-500 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("tutor")}
            >
              Dành cho Gia sư
            </button>
          </div>

          <div className="p-5 sm:p-8">
            <form
              onSubmit={handleRegisterSubmit}
              className="space-y-4 sm:space-y-5"
            >
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-600">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tertiary/20 focus:border-tertiary outline-none transition-all text-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tertiary/20 focus:border-tertiary outline-none transition-all text-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-600">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tertiary/20 focus:border-tertiary outline-none transition-all text-sm bg-white"
                />
              </div>

              {activeTab === "tutor" && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-600">
                      Chuyên môn giảng dạy
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        required={activeTab === "tutor"}
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tertiary/20 focus:border-tertiary outline-none transition-all text-sm bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Chọn môn học sở trường</option>
                        <option value="math">Toán học</option>
                        <option value="physics">Vật lý</option>
                        <option value="chemistry">Hóa học</option>
                        <option value="english">Tiếng Anh</option>
                        <option value="literature">Ngữ văn</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-600">
                  Mật khẩu
                </label>

                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tertiary/20 focus:border-tertiary outline-none transition-all text-sm bg-white"
                />
              </div>

              {/* Điều khoản sử dụng */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer w-4 h-4"
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-xs sm:text-sm text-gray-600 cursor-pointer select-none"
                >
                  Tôi đồng ý với{" "}
                  <a
                    className="text-tertiary font-bold hover:underline"
                    href="#terms"
                  >
                    Điều khoản dịch vụ
                  </a>{" "}
                  và{" "}
                  <a
                    className="text-tertiary font-bold hover:underline"
                    href="#privacy"
                  >
                    Chính sách bảo mật
                  </a>{" "}
                  của Trung tâm.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-sm sm:text-base shadow-md hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isLoading ? <span>Đang xử lý...</span> : <span>Đăng Ký</span>}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-gray-600">
                Đã có tài khoản?{" "}
                <Link to="/login" className="font-bold text-tertiary">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
