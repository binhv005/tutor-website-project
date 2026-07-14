function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-9 h-9 rounded-lg border text-sm font-semibold flex items-center justify-center transition-colors ${
          currentPage === 1
            ? "text-slate-300 border-slate-200 cursor-not-allowed"
            : "text-slate-600 border-slate-300 hover:bg-slate-50 cursor-pointer"
        }`}
      >
        Trước
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors cursor-pointer ${
              currentPage === pageNumber
                ? "bg-primary text-white border"
                : "text-slate-600 border border-slate-300 hover:bg-slate-50"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 rounded-lg border text-sm font-semibold flex items-center justify-center transition-colors ${
          currentPage === totalPages
            ? "text-slate-300 border-slate-200 cursor-not-allowed"
            : "text-slate-600 border-slate-300 hover:bg-slate-50 cursor-pointer"
        }`}
      >
        Sau
      </button>
    </div>
  );
}

export default Pagination;
