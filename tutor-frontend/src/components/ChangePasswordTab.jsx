import { useState } from "react";
import api from "../api/axios";

function ChangePasswordTab() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    // kiểm tra mật khẩu mới
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");

      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post("/auth/change-password", {
        oldPassword,
        newPassword,
      });

      setMessage(data.message);

      // clear form
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Đổi mật khẩu thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Cập nhật mật khẩu
      </h1>
      <p className="text-sm text-headline mb-8">
        Vui lòng nhập mật khẩu cũ và mật khẩu mới để bảo mật tài khoản.
      </p>
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto w-full">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Mật khẩu hiện tại
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Mật khẩu mới
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Xác nhận mật khẩu mới
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {message && <p className="text-green-600 text-sm">{message}</p>}

          <div className="flex gap-4 pt-2">
            <button
              className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Đang cập nhật..." : "Cập nhật mật khẩu"}
            </button>

            <button
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer"
              type="button"
              onClick={() => {
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
                setError("");
                setMessage("");
              }}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordTab;
