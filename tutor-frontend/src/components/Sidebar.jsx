import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faContactCard,
  faGraduationCap,
  faLock,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Sidebar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: "class-manager",
      label: "Quản lý lớp học",
      icon: faGraduationCap,
    },
    {
      id: "contact-manager",
      label: "Quản lý liên hệ",
      icon: faContactCard,
    },
    {
      id: "change-password",
      label: "Đổi mật khẩu",
      icon: faLock,
    },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-4 z-50">
        <h1 className="font-bold text-primary">Gia Sư Đỗ Hằng</h1>

        <button onClick={() => setIsOpen(true)} className="text-xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-64
          bg-white
          border-r
          border-gray-200
          shadow-sm
          z-50
          flex
          flex-col
          transition-transform
          duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="px-6 py-6 border-b flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-primary">Trung tâm Gia sư</h1>

            <p className="text-sm text-gray-500">Admin Dashboard</p>
          </div>

          <button onClick={() => setIsOpen(false)} className="md:hidden">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition

                ${
                  activeTab === item.id
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
