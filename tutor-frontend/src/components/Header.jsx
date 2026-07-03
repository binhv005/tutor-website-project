import tutorLogo from "../assets/tutor-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      path: "/home",
      text: "Trang chủ",
    },
    {
      path: "/services",
      text: "Dịch vụ",
    },
    {
      path: "/tuition",
      text: "Học phí",
    },
    {
      path: "/parents",
      text: "Phụ huynh",
    },
    {
      path: "/tutors",
      text: "Gia sư",
    },
    {
      path: "/documents",
      text: "Tài liệu & Tin tức",
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex justify-between bg-neutral p-3 px-5 shadow-lg ">
      <div className="flex items-center">
        <img src={tutorLogo} alt="logo" className="w-20" />
        <p className="text-primary font-bold">Trung tâm gia sư Đỗ Hằng</p>
      </div>

      <ul className="hidden lg:flex lg:items-center lg:gap-8">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-headline font-bold transition-all duration-300 hover:text-primary"
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        <li>
          <Link
            to="/login"
            className="inline-block text-tertiary font-bold py-1.5 px-4 rounded transition-all duration-300 hover:bg-gray-200"
          >
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="inline-block text-white font-bold bg-primary py-1.5 px-4 rounded transition-all duration-300 hover:bg-red-600 "
          >
            Đăng ký
          </Link>
        </li>
      </ul>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 bg-neutral w-64 h-full py-10 shadow-lg transition-transform duration-300 z-50 lg:hidden ${isOpen === true ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="grid grid-cols-1 gap-10 px-5">
          {menuItems.map((item, index) => (
            <li key={index} className="text-primary font-bold">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.text}
              </Link>
            </li>
          ))}
          <li className="text-primary font-bold">
            <button onClick={() => setIsOpen(false)}>Đóng</button>
          </li>
        </ul>
      </div>
      <button onClick={handleClick} className="lg:hidden">
        <FontAwesomeIcon icon={faBars} className="text-primary text-xl px-2" />
      </button>
    </header>
  );
}

export default Header;
