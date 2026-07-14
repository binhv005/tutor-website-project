import tutorLogo from "../assets/tutor-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const serviceMenu = [
    { name: "Gia sư Tiểu Học", path: "/services/primary" },
    { name: "Gia sư THCS", path: "/services/secondary" },
    { name: "Luyện thi vào 10", path: "/services/grade-10" },
    { name: "Luyện thi Đại Học", path: "/services/university" },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={tutorLogo}
              alt="logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-primary">Đỗ Hằng</span>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Trung tâm gia sư hàng đầu, mang đến giải pháp học tập cá nhân hóa,
            nâng cao năng lực cho học sinh mọi lứa tuổi.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-4">Dịch vụ</h3>
          <ul className="space-y-2">
            {serviceMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Thông tin liên hệ
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-600 text-sm">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-primary"
              />
              <span>Số 123, Đường Giải Phóng, Hai Bà Trưng, Hà Nội</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              <a href="tel:098xxxxxxxx" className="hover:text-primary">
                098x.xxx.xxx
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-600 text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <a
                href="mailto:lienhe@giasudohang.com"
                className="hover:text-primary"
              >
                lienhe@giasudohang.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-200 text-center text-gray-500 text-xs">
        © 2024 Trung tâm gia sư Đỗ Hằng. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
