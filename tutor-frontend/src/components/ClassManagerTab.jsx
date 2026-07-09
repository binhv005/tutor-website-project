import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMarker,
  faPaperPlane,
  faPlus,
  faRectangleXmark,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Pagination from "../components/Pagination";

// Dữ liệu giả lập ban đầu để kiểm tra phân trang
const initialClasses = [
  {
    id: 1,
    code: "MS092",
    subject: "Toán - Lớp 10",
    location: "Đống Đa, Hà Nội",
    salary: "2.400.000đ/tháng",
    status: "Đang tuyển",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    code: "MS093",
    subject: "Tiếng Anh - Lớp 12",
    location: "Cầu Giấy, Hà Nội",
    salary: "3.500.000đ/tháng",
    status: "Đã giao",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    code: "MS094",
    subject: "Ngữ Văn - Lớp 9",
    location: "Hai Bà Trưng, Hà Nội",
    salary: "2.000.000đ/tháng",
    status: "Đang tuyển",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 4,
    code: "MS095",
    subject: "Vật Lý - Lớp 11",
    location: "Ba Đình, Hà Nội",
    salary: "3.000.000đ/tháng",
    status: "Đang tuyển",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 5,
    code: "MS096",
    subject: "Hóa Học - Lớp 12",
    location: "Thanh Xuân, Hà Nội",
    salary: "3.600.000đ/tháng",
    status: "Đã giao",
    statusColor: "bg-green-100 text-green-800",
  },
];

function ClassManagerTab() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClasses = initialClasses.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(initialClasses.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        e.target.reset();
      }, 2000);
    }, 1200);
  };

  return (
    <div className="font-sans flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Quản lý và Tạo lớp học
          </h1>
          <p className="text-sm text-headline">
            Hệ thống điều phối lớp học và gia sư chuyên nghiệp.
          </p>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("create-class-form")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-sm cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} />
          Tạo lớp mới
        </button>
      </div>

      <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-gray-900">Danh sách lớp học</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-gray-900 rounded-lg text-sm font-semibold hover:opacity-90 transition-all cursor-pointer">
            <FontAwesomeIcon icon={faShareNodes} />
            Xuất danh sách
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-headline ml-1">
              Trạng thái
            </span>
            <select className="w-full px-3 py-2 bg-neutral border border-gray-200 rounded-lg text-sm outline-none">
              <option>Tất cả trạng thái</option>
              <option>Đang tuyển</option>
              <option>Đã giao</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-headline ml-1">
              Môn học
            </span>
            <select className="w-full px-3 py-2 bg-neutral border border-gray-200 rounded-lg text-sm outline-none">
              <option>Tất cả môn</option>
              <option>Toán học</option>
              <option>Ngữ văn</option>
              <option>Tiếng Anh</option>
              <option>Lý</option>
              <option>Hóa</option>
              <option>Khác</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-headline ml-1">
              Khối lớp
            </span>
            <select className="w-full px-3 py-2 bg-neutral border border-gray-200 rounded-lg text-sm outline-none">
              <option>Tất cả khối</option>
              <option>Tiểu học</option>
              <option>THCS</option>
              <option>THPT</option>
              <option>Khác</option>
            </select>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                    Mã / Môn
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                    Khu vực
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                    Lương
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-headline uppercase">
                    Trạng thái
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-headline uppercase text-right">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {currentClasses.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{item.code}</div>
                      <div className="text-xs text-headline">
                        {item.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.location}</td>
                    <td className="px-6 py-4 font-bold text-primary">
                      {item.salary}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-tertiary hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                          <FontAwesomeIcon icon={faMarker} />
                        </button>
                        <button className="p-2 text-primary hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                          <FontAwesomeIcon icon={faRectangleXmark} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>

      <section
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto w-full"
        id="create-class-form"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-primary">
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Tạo lớp học mới</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
                Mã lớp
              </label>
              <input
                className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="VD: MS001"
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
                Môn học
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
                Khối lớp
              </label>
              <input
                className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="VD: Lớp 12"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
                Khu vực
              </label>
              <input
                className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="VD: Cầu Giấy, Hà Nội"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Mức lương
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="VD: 250.000đ / buổi"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Lịch học
            </label>
            <input
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="VD: Thứ 2, 4, 6 (18:00 - 20:00)"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-headline mb-1.5 ml-1">
              Yêu cầu gia sư
            </label>
            <textarea
              className="w-full px-4 py-3 bg-neutral border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="Ghi chú yêu cầu chi tiết..."
              rows="3"
            ></textarea>
          </div>
          <button
            className={`w-full py-4 rounded-xl font-bold text-md shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer text-white ${
              isSuccess ? "bg-tertiary" : "bg-primary"
            }`}
            type="submit"
            disabled={isSaving}
          >
            {isSaving ? (
              <span>Đang lưu...</span>
            ) : isSuccess ? (
              <span>Đã đăng thành công!</span>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Lưu và Đăng tin
              </>
            )}
          </button>
        </form>
      </section>
    </div>
  );
}

export default ClassManagerTab;
