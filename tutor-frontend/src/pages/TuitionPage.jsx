import TuitionCard from "../components/TuitionCard";
import ContactCard from "../components/ContactCard";
import discuss from "../assets/discuss.jpg";
import PayQCard from "../components/PayQCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCheck,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
const commit = [
  {
    id: 1,
    logo: faCheck,
    title: "Hợp đồng rõ ràng",
    desc: "Mọi thỏa thuận về học phí, thời gian và lộ trình học tập đều được ký kết văn bản để đảm bảo quyền lợi của phụ huynh.",
    style: "text-white bg-primary ",
  },
  {
    id: 2,
    logo: faMoneyBill,
    title: "Không phí phát sinh",
    desc: "Trung tâm cam kết không thu thêm bất kỳ khoản phí môi giới hay tư vấn nào ngoài mức học phí đã công bố.",
    style: "text-white bg-tertiary",
  },
  {
    id: 3,
    logo: faGraduationCap,
    title: "Đảm bảo tiến bộ",
    desc: "Hoàn trả học phí hoặc thay đổi gia sư miễn phí nếu học sinh không cải thiện kết quả học tập sau tháng đầu tiên.",
    style: "text-headline bg-secondary",
  },
];

const QA = [
  {
    id: 1,
    question: " Học phí được thanh toán vào thời điểm nào?",
    answer:
      "Phụ huynh có thể lựa chọn thanh toán theo buổi học hoặc thanh toán theo tháng (vào cuối mỗi tháng). Trung tâm khuyến khích thanh toán theo tháng để dễ dàng quản lý và nhận các ưu đãi.",
  },
  {
    id: 2,
    question: "Có những hình thức thanh toán nào?",
    answer:
      "Chúng tôi chấp nhận chuyển khoản ngân hàng, thanh toán qua ví điện tử (Momo, VNPay) hoặc tiền mặt trực tiếp tại văn phòng trung tâm.",
  },
  {
    id: 3,
    question: "Nếu học sinh nghỉ học có phải trả phí không",
    answer:
      "Nếu gia đình báo trước ít nhất 4 tiếng, buổi học đó sẽ không tính phí và được sắp xếp học bù vào thời gian phù hợp khác.",
  },
  {
    id: 4,
    question: " Học phí gia sư giáo viên khác gia sư sinh viên như thế nào?",
    answer:
      "Mức phí cho gia sư là giáo viên đang đứng lớp thường cao hơn khoảng 50% - 100% so với gia sư sinh viên, tùy thuộc vào thâm niên và chuyên môn của giáo viên đó.",
  },
];

function TuitionPage() {
  return (
    <div className="px-5 py-10  bg-neutral">
      <div className="flex flex-col gap-5 text-center text-headline py-5">
        <p className="text-primary font-bold bg-red-100 rounded-2xl w-48 text-center m-auto p-1">
          ĐẦU TƯ VÀO KIẾN THỨC
        </p>
        <h1 className="font-bold text-2xl text-center">
          BIỂU PHÍ HỌC TẬP MINH BẠCH
        </h1>
        <p>
          Chúng tôi cam kết mang lại giá trị giáo dục tốt nhất với mức học phí
          cạnh tranh và đội ngũ gia sư chất lượng cao.
        </p>
      </div>
      <TuitionCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-10">
        <img src={discuss} alt="Thảo luận" />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl py-5">
            Cam Kết Chất Lượng & Minh Bạch
          </h1>
          {commit.map((item) => (
            <div key={item.id} className="flex gap-4">
              <FontAwesomeIcon
                icon={item.logo}
                className={`p-2 rounded-lg mt-2 ${item.style}`}
              />
              <div>
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="text-headline">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <h1 className="font-bold text-3xl text-center py-5">
          Câu Hỏi Thường Gặp Về Thanh Toán
        </h1>
        <PayQCard data={QA} />
      </div>

      <ContactCard />
    </div>
  );
}

export default TuitionPage;
