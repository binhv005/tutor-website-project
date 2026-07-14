import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  getClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../api/class.api";

import FilterBar from "../components/FilterBar";
import ClassTable from "../components/ClassTable";
import ClassFormModal from "../components/ClassFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import Pagination from "../components/Pagination";

function ClassManagerTab() {
  const [classes, setClasses] = useState([]);

  const [loading, setLoading] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const [openForm, setOpenForm] = useState(false);

  const [editingClass, setEditingClass] = useState(null);

  const [deleteId, setDeleteId] = useState(null);

  const [filters, setFilters] = useState({
    subject: "",
    grade: "",
    status: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  const latestRequestRef = useRef(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedFilters(filters);
    }, 400);

    return () => window.clearTimeout(timeoutId);
  }, [filters]);

  const loadClasses = useCallback(async () => {
    const requestId = ++latestRequestRef.current;

    try {
      setLoading(true);

      const res = await getClasses(debouncedFilters);

      const responseData = res.data?.data || res.data;

      if (requestId === latestRequestRef.current) {
        setClasses(responseData.items || responseData);
      }
    } catch (error) {
      if (requestId === latestRequestRef.current) {
        console.error("Load classes error:", error);
      }
    } finally {
      if (requestId === latestRequestRef.current) {
        setLoading(false);
      }
    }
  }, [debouncedFilters]);

  useEffect(() => {
    setCurrentPage(1);

    loadClasses();
  }, [debouncedFilters, loadClasses]);

  const handleCreate = async (data) => {
    try {
      await createClass(data);

      await loadClasses();

      closeForm();
    } catch (err) {
      alert(err.response?.data?.msg || "Tạo lớp thất bại");
    }
  };

  const handleUpdate = async (data) => {
    try {
      const { id: _, ...payload } = data;
      await updateClass(editingClass.id, payload);

      setClasses((prevClasses) =>
        prevClasses.map((c) =>
          c.id === editingClass.id ? { ...c, ...payload } : c,
        ),
      );

      await loadClasses();
      closeForm();
    } catch (err) {
      alert(err.response?.data?.msg || "Cập nhật thất bại");
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;

    setIsDeleting(true);

    try {
      await deleteClass(deleteId);

      await loadClasses();

      setDeleteId(null);
    } catch (err) {
      alert(err.response?.data?.msg || "Xóa thất bại");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleExportText = async () => {
    if (classes.length === 0) {
      alert("Không có lớp học để xuất.");
      return;
    }

    const text = classes
      .map((item) => {
        let result = "";

        result += "=========================\n";
        result += `Mã lớp: ${item.id}\n`;
        result += `Môn học: ${item.subject} - ${item.grade}\n`;
        result += `Địa chỉ: ${item.address}\n`;
        result += `Yêu cầu gia sư: ${item.teacherRequirement}\n`;

        if (item.note?.trim()) {
          result += `Ghi chú: ${item.note.trim()}\n`;
        }

        return result;
      })
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);

      alert(`Đã sao chép ${classes.length} lớp học.`);
    } catch (err) {
      console.error(err);

      alert("Không thể sao chép.");
    }
  };
  const closeForm = () => {
    setEditingClass(null);

    setOpenForm(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentClasses = classes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(classes.length / itemsPerPage);

  useEffect(() => {
    const lastPage = Math.max(totalPages, 1);

    if (currentPage > lastPage) {
      setCurrentPage(lastPage);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="space-y-6">
      <div
        className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
"
      >
        <div>
          <h1
            className="
text-3xl
font-bold
text-gray-900
"
          >
            Quản lý lớp học
          </h1>

          <p className="text-gray-500">
            Tạo, cập nhật và quản lý danh sách lớp học.
          </p>
        </div>

        <div
          className="
  flex
  items-center
  gap-3
  "
        >
          <button
            onClick={handleExportText}
            className="
    border
    border-primary
    text-primary
    px-5
    py-3
    rounded-lg
    hover:bg-primary
    hover:text-white
    transition
    "
          >
            Xuất văn bản
          </button>

          <button
            onClick={() => {
              setEditingClass(null);
              setOpenForm(true);
            }}
            className="
    bg-primary
    text-white
    px-5
    py-3
    rounded-lg
    flex
    items-center
    gap-2
    hover:opacity-90
    "
          >
            <FontAwesomeIcon icon={faPlus} />
            Thêm lớp học
          </button>
        </div>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />

      <ClassTable
        classes={currentClasses}
        loading={loading}
        startIndex={indexOfFirstItem}
        onEdit={(item) => {
          setEditingClass(item);

          setOpenForm(true);
        }}
        onDelete={(id) => {
          setDeleteId(id);
        }}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <ClassFormModal
        open={openForm}
        initialData={editingClass}
        onClose={closeForm}
        onSubmit={editingClass ? handleUpdate : handleCreate}
      />

      <DeleteConfirmModal
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        loading={isDeleting}
      />
    </div>
  );
}

export default ClassManagerTab;
