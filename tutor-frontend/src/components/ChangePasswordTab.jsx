function ChangePasswordTab() {
  return (
    <div className="font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Cập nhật mật khẩu
      </h1>
      <p className="text-sm text-headline mb-8">
        Vui lòng nhập mật khẩu cũ và mật khẩu mới để bảo mật tài khoản.
      </p>
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto w-full">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Mật khẩu hiện tại
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
              type="password"
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
            />
          </div>
          <div className="flex gap-4 pt-2">
            <button
              className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
              type="submit"
            >
              Cập nhật mật khẩu
            </button>
            <button
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer"
              type="button"
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
