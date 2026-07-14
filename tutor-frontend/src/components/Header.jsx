import tutorLogo from "../assets/tutor-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const menuItems = [
  { id: 1, path: "/", text: "Trang chủ" },
  { id: 2, path: "/services", text: "Dịch vụ" },
  { id: 3, path: "/tuitions", text: "Học phí" },
  { id: 4, path: "/parents", text: "Phụ huynh" },
  { id: 5, path: "/tutors", text: "Lớp hiện có" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-neutral px-4 py-4 text-sm shadow-lg md:px-10">
      <div className="flex items-center gap-2 ">
        <img src={tutorLogo} alt="logo" className="w-14 md:w-20" />
        <p className="text-primary font-bold  md:text-base">
          Trung tâm gia sư Đỗ Hằng
        </p>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-8">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="text-headline font-bold transition-all duration-300 hover:text-primary"
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 border-l border-neutral-300 pl-4">
          <Link
            to="/login"
            className="text-headline font-bold transition-all hover:text-primary"
          >
            Đăng nhập
          </Link>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="p-2 lg:hidden"
        aria-label="Open Menu"
      >
        <FontAwesomeIcon icon={faBars} className="text-primary text-2xl" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-neutral p-6 shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} className="text-primary text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-primary/20">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-primary border border-primary font-bold text-center py-2.5 rounded-lg text-sm"
          >
            Đăng nhập
          </Link>
        </div>

        <ul className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <li key={item.id} className="text-primary font-bold text-base">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
