import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShieldHalved,
  faHeadset,
  faFaceSmile,
  faGraduationCap,
  faAward,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import DetailServiceCard from "../components/DetailServiceCard";

const commitContact = [
  {
    id: 1,
    icon: faShieldHalved,
    text: "Bảo mật thông tin 100%",
  },
  {
    id: 2,
    icon: faHeadset,
    text: "Hỗ trợ 24/24",
  },
  {
    id: 3,
    icon: faCheck,
    text: "Hơn 15 năm uy tín",
  },
];

const aimData = [
  {
    id: 1,
    icon: faFaceSmile,
    icon_bg_style: "bg-yellow-100",
    border_style: "border-secondary",
    icon_style: "text-secondary",
    tutor: "Giáo viên chuyên biệt",
    level: "Bậc Tiểu Học",
    desc: "Xây dựng nền tảng tư duy vững chắc, rèn luyện kỹ năng đọc viết và toán học cơ bản một cách hứng khởi.",
    aim: "Mục tiêu đào tạo:",
    detail: "Chi tiết chương trình:",
    detail_desc:
      "Chương trình bao gồm 48 buổi học/khóa, tập trung vào phương pháp học tập chủ động thông qua trò chơi và thực hành trực quan.",
    training: [
      {
        text: "Rèn chữ, luyện đọc & viết",
      },
      {
        text: "Toán tư duy logic cơ bản",
      },
      {
        text: "Tiếng Anh giao tiếp mầm non",
      },
      {
        text: "Kỹ năng tự lập & tập trung",
      },
    ],
  },
  {
    id: 2,
    icon: faGraduationCap,
    icon_bg_style: "bg-blue-100",
    border_style: "border-tertiary",
    icon_style: "text-tertiary",
    tutor: "Cam kết đầu ra",
    level: "Bậc Trung Học Cơ Sở",
    desc: "Tập trung vào các môn trọng tâm Toán, Lý, Hóa, Văn, Anh. Củng cố kiến thức mất gốc và bồi dưỡng học sinh giỏi.",
    aim: "Trọng tâm học tập:",
    detail: "Chi tiết chương trình:",
    detail_desc:
      "Lộ trình cá nhân hóa dựa trên học lực thực tế, cam kết cải thiện điểm số sau 3 tháng học tập nghiêm túc.",
    training: [
      {
        text: "Hệ thống hóa kiến thức SGK",
      },
      {
        text: "Kỹ năng giải đề & tư duy",
      },
      {
        text: "Bồi dưỡng HSG các cấp",
      },
    ],
  },
  {
    id: 3,
    icon: faAward,
    icon_bg_style: "bg-red-100",
    border_style: "border-primary",
    icon_style: "text-primary",
    tutor: "Gia sư 8.0+ IELTS",
    level: "Luyện Thi Chứng Chỉ (IELTS, SAT)",
    desc: "Lộ trình cấp tốc đạt mục tiêu điểm số. Đội ngũ gia sư có bằng cấp quốc tế và kinh nghiệm giảng dạy thực chiến.",
    aim: "Nội dung đào tạo:",
    detail: "Chi tiết chương trình:",
    detail_desc:
      "Học viên được tiếp cận kho đề thi độc quyền và tham gia 2 buổi thi thử mô phỏng thực tế mỗi tháng.",
    training: [
      {
        text: "Chiến thuật làm bài thi thực tế",
      },
      {
        text: "Sửa lỗi Writing & Speaking 1-1",
      },
      {
        text: "Ngân hàng đề thi cập nhật mới nhất",
      },
    ],
  },
  {
    id: 4,
    icon: faArrowTrendUp,
    icon_bg_style: "bg-yellow-100",
    border_style: "border-secondary",
    icon_style: "text-secondary",
    tutor: "Tỉ lệ đỗ 95%",
    level: "Ôn Thi Vào Lớp 10",
    desc: "Chiến lược ôn luyện trọng tâm cho các trường chuyên, lớp chọn. Giải đề thi các năm và rèn tâm lý phòng thi.",
    aim: "Lợi ích khóa học:",
    detail: "Chi tiết chương trình:",
    detail_desc:
      "Tập trung rèn luyện kỹ năng quản lý thời gian và chiến thuật làm bài trắc nghiệm/tự luận đạt điểm tối đa.",
    training: [
      {
        text: "Ôn luyện chuyên sâu 3 môn chính",
      },
      {
        text: "Thi thử định kỳ hàng tháng",
      },
      {
        text: "Tư vấn chọn trường phù hợp",
      },
    ],
  },
];

const tutorProcess = [
  {
    id: 1,
    border_style: "border-blue-100",
    text_style: "text-tertiary",
    title: "Tư Vấn",
    desc: "Lắng nghe nhu cầu, mong muốn và mục tiêu học tập của học sinh.",
  },
  {
    id: 2,
    border_style: "border-blue-100",
    text_style: "text-tertiary",
    title: "Đánh Giá",
    desc: "Kiểm tra đầu vào để xác định trình độ và lỗ hổng kiến thức hiện tại.",
  },
  {
    id: 3,
    border_style: "border-blue-100",
    text_style: "text-tertiary",
    title: "Ghép Cặp",
    desc: "Lựa chọn gia sư phù hợp nhất về chuyên môn và phong cách giảng dạy.",
  },
  {
    id: 4,
    border_style: "border-primary",
    text_style: "text-primary",
    title: "Bắt Đầu Học",
    desc: "Tiến hành học thử và bắt đầu lộ trình học tập chính thức.",
  },
];

function ServicePage() {
  return (
    <div>
      <div className="bg-tertiary text-white p-5">
        <div className="flex flex-col gap-4 py-10">
          <h1 className="text-4xl font-bold">DỊCH VỤ GIA SƯ CHUYÊN NGHIỆP</h1>
          <p>
            Nâng tầm tri thức, đồng hành cùng tương lai. Chúng tôi cung cấp giải
            pháp học tập cá nhân hóa cho mọi cấp học.
          </p>
        </div>
        <div className="m-auto flex gap-3 text-white font-bold ">
          <Link
            to="/parents"
            className="bg-primary  p-3 rounded-lg transition duration-300 hover:scale-105"
          >
            Đăng Ký Tư Vấn
          </Link>
          <Link
            to="/tuitions"
            className="bg-yellow-500  p-3 rounded-lg transition duration-300 hover:scale-105"
          >
            Xem Bảng Giá
          </Link>
        </div>
      </div>

      <div className=" py-10">
        <h1 className="text-center text-2xl font-bold text-tertiary">
          Chương Trình Đào Tạo
        </h1>
        <hr className=" text-primary w-28 border-2 rounded-lg mx-auto mt-5"></hr>
        <DetailServiceCard data={aimData} />
      </div>

      <div className="flex flex-col gap-8 px-5 py-10 ">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl font-bold text-tertiary">
            Quy Trình Nhận Gia Sư
          </h1>
          <p>
            Chúng tôi đảm bảo chất lượng giảng dạy thông qua quy trình tuyển
            chọn và kết nối chuyên nghiệp nhất.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
          {tutorProcess.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 text-center">
              <p
                className={`bg-white border-2 w-10 rounded shadow-lg font-bold text-3xl m-auto ${item.border_style} ${item.text_style} transition duration-300 hover:scale-115`}
              >
                {item.id}
              </p>
              <p className="font-bold text-xl">{item.title}</p>
              <p className="text-headline">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactCard data={commitContact} />
    </div>
  );
}

export default ServicePage;
