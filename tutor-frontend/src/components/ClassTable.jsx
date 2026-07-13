import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function ClassTable({ classes, loading, onEdit, onDelete, startIndex = 0 }) {
  if (loading) {
    return (
      <div
        className="
        bg-white
        rounded-xl
        border
        p-10
        text-center
        text-gray-500
      "
      >
        Đang tải dữ liệu...
      </div>
    );
  }

  if (classes.length === 0) {
    return (
      <div
        className="
        bg-white
        rounded-xl
        border
        p-10
        text-center
        text-gray-500
      "
      >
        Chưa có lớp học nào.
      </div>
    );
  }

  return (
    <div
      className="
      bg-white
      rounded-xl
      border
      border-gray-200
      shadow-sm
      overflow-hidden
    "
    >
      <div className="overflow-x-auto">
        <table
          className="
          min-w-full
          text-sm
        "
        >
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                #
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Môn học
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Khối
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Địa chỉ
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Học phí
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Số buổi
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Phụ huynh
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Số điện thoại
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Trạng thái
              </th>

              <th className="px-5 py-4 text-left font-semibold text-gray-600">
                Ghi chú
              </th>

              <th className="px-5 py-4 text-center font-semibold text-gray-600">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody>
            {classes.map((item, index) => (
              <tr
                key={item.id}
                className="
                  border-t
                  hover:bg-gray-50
                  transition
                "
              >
                <td className="px-5 py-4 text-gray-500">{startIndex + index + 1}</td>

                <td className="px-5 py-4">
                  <div
                    className="
                    font-semibold
                    text-gray-900
                  "
                  >
                    {item.subject}
                  </div>

                  <div
                    className="
                    text-xs
                    text-gray-500
                    max-w-xs
                      break-words
                  "
                  >
                    {item.teacherRequirement}
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className="
                    px-2
                    py-1
                    rounded-md
                    bg-blue-50
                    text-blue-700
                    text-xs
                    font-medium
                  "
                  >
                    {item.grade}
                  </span>
                </td>

                <td
                  className="
                  px-5
                  py-4
                  max-w-xs
                "
                >
                  <div
                    className="
                      break-words
                    text-gray-700
                  "
                  >
                    {item.address}
                  </div>
                </td>

                <td
                  className="
                  px-5
                  py-4
                  font-semibold
                  text-gray-800
                "
                >
                  {item.tuition}
                </td>

                <td className="px-5 py-4">{item.weeklySessions}</td>

                <td className="px-5 py-4">
                  <div
                    className="
                    flex
                    items-center
                    gap-2
                  "
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="
                        text-gray-400
                        text-xs
                      "
                    />

                    <span
                      className="
                      font-medium
                      text-gray-800
                    "
                    >
                      {item.parentName || "-"}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-700
                  "
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="
                        text-green-500
                        text-xs
                      "
                    />

                    {item.parentPhone || "-"}
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold

                    ${
                      item.status === "AVAILABLE"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }

                    `}
                  >
                    {item.status === "AVAILABLE" ? "Đang tuyển" : "Đã giao"}
                  </span>
                </td>

                <td
                  className="
                  px-5
                  py-4
                  max-w-xs
                "
                >
                  <div
                    className="
                        break-words
                      text-gray-600
                    "
                    title={item.note}
                  >
                    {item.note || "-"}
                  </div>
                </td>

                <td
                  className="
                  px-5
                  py-4
                "
                >
                  <div
                    className="
                    flex
                    justify-center
                    gap-2
                  "
                  >
                    <button
                      onClick={() => onEdit(item)}
                      aria-label={`Chỉnh sửa lớp ${item.subject}`}
                      className="
                        w-9
                        h-9
                        rounded-lg
                        bg-blue-50
                        text-blue-600
                        hover:bg-blue-100
                        transition
                      "
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      aria-label={`Xóa lớp ${item.subject}`}
                      className="
                        w-9
                        h-9
                        rounded-lg
                        bg-red-50
                        text-red-600
                        hover:bg-red-100
                        transition
                      "
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassTable;
