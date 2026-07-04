import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function TuitionCard() {
  const gradeData = [
    {
      id: 1,
      level: "CẤP TIỂU HỌC",
      grade: "Lớp 1 - Lớp 5",
      tuition: "120k",
      desc: "*Mức phí cơ bản cho gia sư sinh viên",
      detail: [
        {
          text: "Toán, Tiếng Việt, Tiếng Anh",
        },
        {
          text: "Rèn chữ và tư duy sớm",
        },
        {
          text: "Báo cáo tiến độ hàng tuần",
        },
      ],
    },
    {
      id: 2,
      level: "CẤP TRUNG HỌC",
      grade: "Lớp 6 - Lớp 9",
      tuition: "180k",
      desc: "*Phổ biến nhất cho ôn thi lớp 10",
      detail: [
        {
          text: "Toán, Lý, Hóa, Văn, Anh",
        },
        {
          text: "Luyện thi vào lớp 10 công lập",
        },
        {
          text: "Lộ trình cá nhân hóa 100%",
        },
        {
          text: "Hỗ trợ giải bài tập 24/7",
        },
      ],
    },
    {
      id: 3,
      level: "CẤP PHỔ THÔNG",
      grade: "Lớp 10 - Lớp 12",
      tuition: "250k",
      desc: "*Gia sư chuyên sâu luyện thi ĐH",
      detail: [
        {
          text: "Ôn thi THPT Quốc Gia & ĐGNL",
        },
        {
          text: "Chuyên đề nâng cao từng môn",
        },
        {
          text: "Tư vấn chọn trường & khối thi",
        },
      ],
    },
    {
      id: 4,
      level: "NGOẠI NGỮ - NĂNG KHIẾU",
      grade: "Mọi lứa tuổi (Trẻ em - Người lớn)",
      tuition: "120k",
      desc: "*Gia sư sở hữu chứng chỉ quốc tế / giải thưởng uy tín",
      detail: [
        {
          text: "Giao tiếp phản xạ & Phát âm chuẩn",
        },
        {
          text: "Luyện thi chứng chỉ (IELTS, HSK, JLPT...) / Khối H, V",
        },
        {
          text: "Lộ trình cá nhân hóa theo năng khiếu từng học viên",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {gradeData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 bg-white rounded-lg border-headline border p-3 transition duration-300 hover:border-primary hover:scale-105"
        >
          <div className="flex flex-col gap-3">
            <p className="text-tertiary font-bold">{item.level}</p>
            <p className="font-bold text-xl">{item.grade}</p>
            <div>
              <span className="font-bold text-5xl text-primary">
                {item.tuition}
              </span>
              <span>/giờ</span>
            </div>
            <p className="text-headline italic">{item.desc}</p>
          </div>
          {item.detail.map((info) => (
            <div key={info.text} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-tertiary" />
              <p>{info.text}</p>
            </div>
          ))}
          <button className="bg-primary text-white font-bold text-center p-3 w-40 m-auto hover:bg-red-600">
            Đăng Ký Ngay
          </button>
        </div>
      ))}
    </div>
  );
}

export default TuitionCard;
