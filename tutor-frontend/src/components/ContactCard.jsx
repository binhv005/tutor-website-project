import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function ContactCard() {
  const commit = [
    {
      icon: faShieldHalved,
      text: "Bảo mật thông tin 100%",
    },
    {
      icon: faHeadset,
      text: "Hỗ trợ 24/24",
    },
    {
      icon: faCheck,
      text: "Hơn 15 năm uy tín",
    },
  ];
  return (
    <div className="px-5 py-20 bg-tertiary ">
      <div className="text-center text-white">
        <p className="font-bold text-3xl mb-4">
          Sẵn sàng nâng tầm kết quả học tập?
        </p>
        <p className="mb-5">
          Hãy để chúng tôi giúp bạn tìm kiếm gia sư phù hợp nhất với trình độ và
          tính cách của con bạn ngay hôm nay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
        <input
          type="text"
          placeholder="Số điện thoại của bạn"
          className="bg-white px-3 py-5 rounded-xl"
        />
        <button className="bg-primary text-white rounded-xl px-3 py-5 hover:bg-red-600`">
          Đăng Ký Tư Vấn Ngay
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-50 gap-5">
        {commit.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <FontAwesomeIcon icon={item.icon} className="text-secondary" />
            <p className="text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;
