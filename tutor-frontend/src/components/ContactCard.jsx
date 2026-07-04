import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ContactCard({ data }) {
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
        <button className="text-white border border-white rounded-xl px-3 py-5 hover:bg-white hover:text-tertiary">
          Gọi hotline: 09x.xxx.xxx
        </button>
        <Link
          to="/parents"
          className="flex justify-center bg-primary text-white rounded-xl px-3 py-5 hover:bg-red-600"
        >
          Đăng Ký Tư Vấn Ngay
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-screen-md lg:mx-auto gap-5">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <FontAwesomeIcon icon={item.icon} className="text-secondary" />
            <p className="text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCard;
