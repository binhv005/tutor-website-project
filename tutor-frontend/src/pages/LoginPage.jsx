import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const { data } = await api.post("/auth/login", {
        username,
        password,
      });

      if (data && data.data && data.data.role === "ADMIN") {
        localStorage.setItem("user", JSON.stringify(data.data));

        navigate("/dashboard");
      } else {
        setError("Không có quyền truy cập");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setIsLoading(false);
    }
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
                  htmlFor="username"
                >
                  Tên đăng nhập
                </label>
                <div className="relative">
                  <input
                    className="w-full pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary focus:border-tertiary transition-all outline-none text-sm sm:text-base"
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

              <button
                className="w-full bg-primary text-white py-3.5 mb-4 sm:py-4 rounded-lg font-semibold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-md disabled:opacity-70 cursor-pointer"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Đang xử lý..." : "Đăng nhập ngay"}
              </button>
            </form>
            {error && (
              <p className="text-primary text-center text-sm">{error}</p>
            )}
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
