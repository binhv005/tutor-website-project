import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faContactCard,
  faGraduationCap,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: faChartLine },
    { id: "class-manager", label: "Quản lý lớp học", icon: faGraduationCap },
    { id: "contact-manager", label: "Quản lý liên hệ", icon: faContactCard },
    { id: "change-password", label: "Đổi mật khẩu", icon: faLock },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col py-6 bg-neutral border-r border-gray-200 w-64 hidden md:flex z-50 font-sans">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Trung Tâm Gia Sư Đỗ Hằng
        </h1>
        <p className="text-xs text-headline opacity-70">Admin</p>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all rounded-lg text-sm font-semibold cursor-pointer ${
              activeTab === item.id
                ? "bg-secondary text-gray-900 shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
