import tutorLogo from "../assets/tutor-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHeadset,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const menuIcon = [faPhone, faEnvelope, faHeadset];
  const serviceMenu = [
    "Gia sư Tiểu Học",
    "Gia sư THCS",
    "Gia sư Năng Khiếu",
    "Luyện thi vào 10",
    "Luyện thi Đại Học",
    "Luyện thi IELTS",
  ];

  const supportMenu = [
    "Về chúng tôi",
    "Điều khoản dịch vụ",
    "Chính sách quyền riêng tư",
  ];

  const contactMenu = [
    {
      icon: faLocationDot,
      text: "Số 123, Đường Giải Phóng, Hai Bà Trưng, Hà Nội",
    },
    {
      icon: faPhone,
      text: "098x.xxx.xxx",
    },
    {
      icon: faEnvelope,
      text: "lienhe@giasudohang.com",
    },
  ];

  return (
    <footer className="bg-neutral px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center">
            <img src={tutorLogo} alt="logo" className="w-12 py-3" />
            <p className="font-bold text-primary">Trung tâm gia sư Đỗ Hằng</p>
          </div>
          <p className="text-headline py-3 lg:text-justify">
            Trung tâm gia sư hàng đầu Việt Nam, chuyên cung cấp các giải pháp
            học tập cá nhân hóa cho học sinh mọi lứa tuổi.
          </p>
          <ul className="flex gap-8 py-3">
            {menuIcon.map((item, index) => (
              <li key={index}>
                <button className="text-primary bg-white p-2 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white">
                  <FontAwesomeIcon icon={item} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-bold py-4 text-2xl">DỊCH VỤ</h1>
          <ul>
            {serviceMenu.map((item, index) => (
              <li key={index} className="py-1 text-headline hover:text-primary">
                <Link to="/services">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-bold py-4 text-2xl">HỖ TRỢ</h1>
          <ul>
            {supportMenu.map((item, index) => (
              <li key={index} className="py-1 text-headline hover:text-primary">
                <Link to="/supports">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-bold py-4 text-2xl">LIÊN HỆ</h1>
          <ul>
            {contactMenu.map((item, index) => (
              <li key={index} className="py-1 text-headline hover:text-primary">
                <Link to="/contacts" className="flex items-center gap-2">
                  <FontAwesomeIcon icon={item.icon} />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-headline my-5" />
      <p className="py-10 text-headline lg:text-center">
        © 2024 Trung tâm gia sư Đỗ Hằng. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
