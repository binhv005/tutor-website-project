import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import api from "../api/axios";
import EditContactModal from "../components/EditContactModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function ContactManagerTab() {
  const [contacts, setContacts] = useState([]);

  const [selectedContact, setSelectedContact] = useState(null);

  const [statusFilter, setStatusFilter] = useState("Tất cả");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  // 1. Cập nhật useEffect để lắng nghe statusFilter
  useEffect(() => {
    fetchContacts(statusFilter); // Gọi lại mỗi khi statusFilter đổi
  }, [statusFilter]);

  // 2. Cập nhật hàm fetchContacts để truyền tham số lọc
  async function fetchContacts(filter) {
    try {
      const params =
        filter !== "Tất cả"
          ? { status: filter === "Chưa liên hệ" ? "PENDING" : "CONTACTED" }
          : {};
      const res = await api.get("/consultations", { params });
      setContacts(res.data.data || res.data);
    } catch (error) {
      console.error(error);
    }
  }

  function getStatusText(status) {
    switch (status) {
      case "PENDING":
        return "Chưa liên hệ";

      case "CONTACTED":
        return "Đã liên hệ";

      default:
        return status;
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";

      case "CONTACTED":
        return "bg-green-100 text-green-800";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  const filteredContacts = (Array.isArray(contacts) ? contacts : []).filter(
    (contact) => {
      if (statusFilter === "Tất cả") return true;
      if (statusFilter === "Chưa liên hệ") return contact?.status === "PENDING";
      if (statusFilter === "Đã liên hệ") return contact?.status === "CONTACTED";
      return true;
    },
  );

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentContacts = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  function handleFilterChange(e) {
    setStatusFilter(e.target.value);

    setCurrentPage(1);
  }

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  async function handleUpdate(id, data) {
    try {
      await api.put(`/consultations/${id}`, data);

      // Đóng modal
      setSelectedContact(null);

      // Gọi lại fetchContacts để làm mới dữ liệu từ server
      await fetchContacts(statusFilter);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    const confirm = window.confirm("Bạn có chắc muốn xóa liên hệ này?");

    if (!confirm) return;

    try {
      await api.delete(`/consultations/${id}`);

      // Gọi lại fetchContacts để làm mới dữ liệu từ server
      await fetchContacts(statusFilter);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="font-sans space-y-6">
      <div
        className="
flex 
flex-col 
sm:flex-row 
sm:items-center 
sm:justify-between 
gap-4
"
      >
        <div>
          <h1
            className="
text-3xl 
font-bold 
text-gray-900 
mb-2
"
          >
            Quản lý Liên hệ
          </h1>

          <p className="text-sm text-headline">
            Danh sách phụ huynh đăng ký tư vấn tìm gia sư.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Trạng thái:</label>

          <select
            value={statusFilter}
            onChange={handleFilterChange}
            className="
bg-white
border
rounded-lg
px-3
py-2
text-sm
"
          >
            <option value="Tất cả">Tất cả trạng thái</option>

            <option value="Chưa liên hệ">Chưa liên hệ</option>

            <option value="Đã liên hệ">Đã liên hệ</option>
          </select>
        </div>
      </div>

      <div
        className="
bg-white
rounded-xl
border
shadow-sm
overflow-hidden
"
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-4">Phụ huynh</th>

              <th className="px-6 py-4">Số điện thoại</th>

              <th className="px-6 py-4">Môn quan tâm</th>

              <th className="px-6 py-4">Lớp</th>

              <th className="px-6 py-4">Trạng thái</th>

              <th className="px-6 py-4">Thao tác</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {currentContacts.length > 0 ? (
              currentContacts.map((contact, index) => (
                <tr key={contact.id || index}>
                  <td className="px-6 py-4 font-bold">{contact.name}</td>

                  <td className="px-6 py-4">{contact.phone}</td>

                  <td className="px-6 py-4">{contact.subject}</td>

                  <td className="px-6 py-4">{contact.grade}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`
px-3
py-1
rounded-full
text-xs
font-semibold
${getStatusColor(contact.status)}
`}
                    >
                      {getStatusText(contact.status)}
                    </span>
                  </td>

                  <td className="px-6 py-4 space-x-3">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="
text-blue-600
hover:underline
"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="
text-red-600
hover:underline
"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="
text-center
py-10
text-gray-500
"
                >
                  Không tìm thấy liên hệ
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {selectedContact && (
        <EditContactModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
}

export default ContactManagerTab;
