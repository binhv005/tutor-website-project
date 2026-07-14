import { useState, useEffect } from "react";

function FilterBar({ filters, setFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters(localFilters);
    }, 500);

    return () => clearTimeout(handler);
  }, [localFilters, setFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    const cleared = { subject: "", grade: "", status: "" };
    setLocalFilters(cleared);
    setFilters(cleared);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="text-sm font-medium">Môn học</label>
          <input
            type="text"
            name="subject"
            value={localFilters.subject}
            onChange={handleChange}
            placeholder="Ví dụ: Toán"
            className="mt-2 w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Khối lớp</label>
          <input
            type="text"
            name="grade"
            value={localFilters.grade}
            onChange={handleChange}
            placeholder="Ví dụ: Lớp 10"
            className="mt-2 w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Trạng thái</label>
          <select
            name="status"
            value={localFilters.status}
            onChange={handleChange}
            className="mt-2 w-full border rounded-lg px-4 py-3"
          >
            <option value="">Tất cả</option>
            <option value="AVAILABLE">Đang tuyển</option>
            <option value="ASSIGNED">Đã giao</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleClear}
            className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg py-3 font-medium transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
