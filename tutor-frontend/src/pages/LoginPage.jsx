import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert("Chức năng đăng nhập đang được phát triển. Vui lòng quay lại sau!");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-neutral text-gray-900 font-sans min-h-screen">
      <div className="flex min-h-screen flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-8 sm:px-6 md:p-10">
          <div className="text-center mb-6 md:hidden">
            <h1 className="text-3xl text-primary font-extrabold uppercase tracking-tight">
              Đỗ Hằng
            </h1>
            <p className="text-gray-500 text-xs font-medium tracking-wide">
              Tutoring Center
            </p>
          </div>

          <div className="w-full max-w-md bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-sm border border-gray-200">
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1.5">
                Dành cho Admin
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="space-y-1.5">
                <label
                  className="block text-sm font-semibold text-gray-950"
                  htmlFor="email"
                >
                  Email của bạn
                </label>
                <div className="relative">
                  <input
                    className="w-full pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all outline-none text-sm sm:text-base"
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-sm font-semibold text-gray-950"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <a
                    className="text-headline text-xs font-medium hover:underline transition-all"
                    href="#forgot"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all outline-none text-sm sm:text-base"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-200 rounded focus:ring-primary cursor-pointer"
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label
                  className="ml-2 text-xs sm:text-sm font-medium text-gray-600 cursor-pointer select-none"
                  htmlFor="remember"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <button
                className="w-full bg-primary text-white py-3.5 mb-4 sm:py-4 rounded-lg font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-md disabled:opacity-70 cursor-pointer"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng nhập ngay"}
              </button>
            </form>
          </div>

          <footer className="mt-8 md:mt-12 text-center text-gray-400 opacity-80">
            <p className="text-[11px] sm:text-xs font-medium">
              © 2024 Trung tâm gia sư Đỗ Hằng. Bảo mật &amp; Chuyên nghiệp.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
