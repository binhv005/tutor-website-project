function DeleteConfirmModal({ open, onClose, onConfirm, loading }) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-5"
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
        <div className="px-6 py-5 border-b">
          <h2 className="text-xl font-bold text-red-600">Xóa lớp học</h2>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-600">
            Bạn có chắc chắn muốn xóa lớp học này?
          </p>

          <p className="text-sm text-red-500 mt-2">
            Hành động này không thể hoàn tác.
          </p>
        </div>

        <div className="flex justify-end gap-3 px-6 py-5 border-t">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Hủy
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
