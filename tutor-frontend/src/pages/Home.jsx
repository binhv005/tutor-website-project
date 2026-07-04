import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import elementary from "../assets/elementary.jpg";
import highschool from "../assets/highschool.jpg";
import study from "../assets/study.jpg";
import national from "../assets/national.jpg";
import {
  faStar,
  faUsers,
  faUserGraduate,
  faCheck,
  faWebAwesome,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import teaching from "../assets/teaching.jpg";
import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import FeedbackCard from "../components/FeedbackCard";
import ContactCard from "../components/ContactCard";

const statData = [
  {
    id: 1,
    icon: faUsers,
    title: "10,000+",
    desc: "Học sinh đã và đang theo học tại trung tâm trên toàn quốc.",
  },
  {
    id: 2,
    icon: faUserGraduate,
    title: "500+",
    desc: "Gia sư giỏi từ các trường Đại học danh tiếng (Sư Phạm, Ngoại Thương, Bách Khoa).",
  },
  {
    id: 3,
    icon: faCheck,
    title: "15 Năm",
    desc: "Kinh nghiệm trong lĩnh vực giáo dục và đào tạo chất lượng cao.",
  },
  {
    id: 4,
    icon: faWebAwesome,
    title: "Cá Nhân Hóa",
    desc: "Mỗi học sinh đều có một lộ trình học tập riêng biệt phù hợp với năng lực.",
  },
];

const serviceData = [
  {
    id: 1,
    bgImg: elementary,
    badges: ["Cấp 1"],
    title: "Tiểu Học",
    desc: "Xây dựng nền tảng tư duy, rèn chữ và tư duy toán học sớm.",
    btnText: "Khám phá ngay",
    btnStyle: "border-b-4 border-primary",
    path: "/services",
  },
  {
    id: 2,
    bgImg: highschool,
    badges: ["Cấp 2", "Cấp 3"],
    title: "THCS & THPT",
    desc: "Tập trung vào các môn trọng điểm Toán, Lý, Hóa, Anh và Văn. Chuẩn bị vững vàng cho các kỳ thi học kỳ.",
    btnText: "Tìm hiểu lộ trình",
    btnStyle: "bg-primary rounded-xl border-primary",
    path: "/services",
  },
  {
    id: 3,
    bgImg: study,
    badges: ["BỨT PHÁ"],
    title: "Luyện Thi Đại Học & Chuyển Cấp",
    desc: "Luyện thi cấp tốc, bám sát cấu trúc đề thi chính thức. Cam kết đầu ra tại các trường top đầu.",
    btnText: "Đăng ký tư vấn miễn phí",
    btnStyle: "bg-white text-primary text-bold rounded-xl",
    path: "/parents",
  },
  {
    id: 4,
    bgImg: national,
    badges: ["Ngoại ngữ"],
    title: "IELTS / TOEIC / Giao Tiếp",
    desc: "Học cùng gia sư bản ngữ hoặc gia sư 8.0+ IELTS.",
    btnText: "Đăng ký ngay",
    btnStyle: " text-white text-bold border-b-3",
    path: "/parents",
  },
];

const feedbackData = [
  {
    id: 1,
    desc: "Gia sư rất nhiệt tình và kiên nhẫn. Con tôi từ một học sinh sợ môn Toán nay đã có thể tự tin giải bài tập và đạt điểm 9 trong kỳ thi vừa qua.",
    name: "Chị Mai Lan",
    role: "Phụ huynh học sinh lớp 9",
  },
  {
    id: 2,
    desc: "Lộ trình học IELTS tại trung tâm Đỗ Hằng rất rõ ràng. Sau 6 tháng, mình đã đạt 7.5 IELTS dù xuất phát điểm chỉ ở mức cơ bản.",
    name: "Minh Quân",
    role: "Sinh viên FTU",
  },
  {
    id: 3,
    desc: "Trung tâm hỗ trợ rất nhanh mỗi khi gia đình có yêu cầu thay đổi lịch học. Đội ngũ quản lý chuyên nghiệp và chu đáo.",
    name: "Anh Đức Hoàng",
    role: "Phụ huynh bé Bảo An",
  },
];

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

function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-5 py-10">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3 font-bold text-primary">
            <FontAwesomeIcon icon={faStar} />
            <p>CHẮP CÁNH ƯỚC MƠ HỌC TẬP</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-headline">
              Kiến Tạo
              <span className="font-bold text-primary">Thành Công</span> Từ{" "}
              <span className="font-bold text-tertiary">Nền Tảng</span> Vững
              Chắc
            </h1>
            <p className="text-headline">
              Đồng hành cùng học sinh trong hành trình chinh phục tri thức với
              đội ngũ gia sư tận tâm, phương pháp giảng dạy hiện đại và lộ trình
              cá nhân hóa.
            </p>
          </div>
          <div className="grid grid-cols-1 w-fit gap-2 lg:grid-cols-2 ">
            <Link
              to="/parents"
              className="flex justify-center items-center w-48 h-12 bg-primary rounded-lg text-white font-bold transition-transform duration-300 hover:scale-110"
            >
              Tìm gia sư ngay
            </Link>
            <Link
              to="services"
              className="flex justify-center items-center w-48 h-12 border-2 border-tertiary rounded-lg text-tertiary font-bold hover:text-white hover:bg-tertiary"
            >
              Xem lộ trình học
            </Link>
          </div>
        </div>
        <img
          src={teaching}
          alt="teach"
          className="w-auto h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 bg-neutral py-20 px-5">
        <h1 className="text-center text-headline">Tại sao nên chọn Đỗ Hằng?</h1>
        <p className="border border-2 rounded-xl text-primary w-28 m-auto mt-5"></p>
        <StatCard data={statData} />
      </div>

      <div className="grid grid-cols-1 gap-3 px-5 py-10">
        <p className="font-bold text-primary">Chương Trình Đào Tạo Đặc Biệt</p>
        <p className="text-headline">
          Chúng tôi cung cấp các gói dịch vụ gia sư toàn diện cho mọi cấp độ học
          tập, giúp học sinh bứt phá điểm số.
        </p>
        <Link to="/services" className="font-bold text-tertiary">
          Xem tất cả dịch vụ ⮕
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </div>

      <div className="bg-neutral px-5 py-20">
        <p className="text-center mb-5">Cảm Nhận Từ Học Viên & Phụ Huynh</p>
        <p className="text-center mb-5 text-headline">
          Sự thành công của con em là niềm tự hào và động lực lớn nhất cho chúng
          tôi.
        </p>
        <FeedbackCard data={feedbackData} />
      </div>
      <ContactCard data={commitContact} />
    </div>
  );
}

export default Home;
