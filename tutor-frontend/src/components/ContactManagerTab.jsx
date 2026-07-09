import { useState } from "react";
import Pagination from "../components/Pagination";

// Dữ liệu giả lập ban đầu
const initialContacts = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    phone: "0987-xxx-321",
    subjects: "Toán, Lý",
    grade: "Lớp 11",
    status: "Chưa liên hệ",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    phone: "0912-xxx-456",
    subjects: "Tiếng Anh",
    grade: "Lớp 6",
    status: "Đã liên hệ",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Lê Hoàng Cường",
    phone: "0934-xxx-789",
    subjects: "Ngữ Văn",
    grade: "Lớp 9",
    status: "Chưa liên hệ",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 4,
    name: "Phạm Minh Đức",
    phone: "0976-xxx-012",
    subjects: "Hóa Học",
    grade: "Lớp 12",
    status: "Đang xử lý",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 5,
    name: "Vũ Thị Em",
    phone: "0955-xxx-345",
    subjects: "Tiểu Học (All)",
    grade: "Lớp 3",
    status: "Chưa liên hệ",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 6,
    name: "Hoàng Đình Phong",
    phone: "0922-xxx-678",
    subjects: "Toán, Tiếng Anh",
    grade: "Lớp 10",
    status: "Đã liên hệ",
    statusColor: "bg-green-100 text-green-800",
  },
];

function ContactManagerTab() {
  const [statusFilter, setStatusFilter] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredContacts = initialContacts.filter((contact) => {
    if (statusFilter === "Tất cả") return true;
    return contact.status === statusFilter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="font-sans space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quản lý Liên hệ
          </h1>
          <p className="text-sm text-headline">
            Danh sách phụ huynh đăng ký tư vấn tìm gia sư.
          </p>
        </div>

        <div className="flex items-center gap-2 min-w-[200px]">
          <label
            htmlFor="status-filter"
            className="text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            Trạng thái:
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={handleFilterChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
          >
            <option value="Tất cả">Tất cả trạng thái</option>
            <option value="Chưa liên hệ">Chưa liên hệ</option>
            <option value="Đang xử lý">Đang xử lý</option>
            <option value="Đã liên hệ">Đã liên hệ</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                  Phụ huynh
                </th>
                <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                  Số điện thoại
                </th>
                <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                  Môn quan tâm
                </th>
                <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                  Lớp
                </th>
                <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentContacts.length > 0 ? (
                currentContacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{contact.phone}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {contact.subjects}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{contact.grade}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${contact.statusColor}`}
                      >
                        {contact.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-10 text-center text-gray-500 italic"
                  >
                    Không tìm thấy liên hệ nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ContactManagerTab;
