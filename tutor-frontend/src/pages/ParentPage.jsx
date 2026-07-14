import ConsultationForm from "../components/ConsultationForm";
import CommitmentCard from "../components/CommitmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowTrendUp,
  faLightbulb,
  faPeopleGroup,
  faCodeCompare,
  faArrowRight,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import hired from "../assets/hired.jpg";
import ContactCard from "../components/ContactCard";

const commitments = [
  {
    id: "commitment-1",
    icon: faLightbulb,
    title: "Lộ trình cá nhân hóa",
    description:
      "Mỗi học sinh được khảo sát năng lực đầu vào và xây dựng lộ trình học tập riêng biệt để tối ưu hóa thời gian.",
    borderTopColor: "border-t-primary",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "commitment-2",
    icon: faPeopleGroup,
    title: "Đội ngũ tinh hoa",
    description:
      "Tuyển chọn nghiêm ngặt từ các trường đại học top đầu (Sư phạm, Ngoại thương, Bách khoa) với kỹ năng sư phạm xuất sắc.",
    borderTopColor: "border-t-tertiary",
    iconColor: "text-tertiary",
    iconBg: "bg-tertiary/10",
  },
  {
    id: "commitment-3",
    icon: faCodeCompare,
    title: "Đổi gia sư miễn phí",
    description:
      "Nếu học sinh cảm thấy không phù hợp sau buổi học đầu tiên, chúng tôi hỗ trợ đổi gia sư mới hoàn toàn miễn phí.",
    borderTopColor: "border-t-secondary",
    iconColor: "text-headline",
    iconBg: "bg-secondary/20",
  },
];

const steps = [
  {
    step: "1",
    title: "Sàng lọc hồ sơ chuyên sâu",
    desc: "Kiểm tra bằng cấp, bảng điểm và các chứng chỉ sư phạm từ các nguồn uy tín.",
  },
  {
    step: "2",
    title: "Kiểm tra kiến thức chuyên môn",
    desc: "Thực hiện bài test đánh giá năng lực theo chuẩn đề thi của Bộ Giáo dục.",
  },
  {
    step: "3",
    title: "Phỏng vấn & Giảng thử",
    desc: "Đánh giá kỹ năng truyền đạt, tư duy sư phạm và tâm lý giáo dục.",
  },
  {
    step: "4",
    title: "Đào tạo nghiệp vụ Đỗ Hằng",
    desc: "Gia sư phải hoàn thành khóa huấn luyện về quy tắc ứng xử và phương pháp giảng dạy hiện đại.",
  },
  {
    step: "5",
    title: "Thử việc có giám sát",
    desc: "Trung tâm theo dõi sát sao 2 buổi học đầu tiên để đảm bảo chất lượng giảng dạy.",
  },
];
function ParentPage() {
  return (
    <div className="pt-20 bg-neutral text-headline">
      <div className="relative min-h-[700px] flex items-center overflow-hidden bg-neutral/50">
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCezD3SsbVx3TGU4pby7drZUWdreBEY3celSOMuENANqCOO-Jtp6WP9D9CVaP23A18EE8Dwx0irE10V_fsL7UMCduJSueMpWa48DkYZ4ULvizNST0m_VLy8C73jKE7L1BEPprasUL-ZR-UYmfs8Cl9Npf-ClT7_ZwDef4VeNs7wwFyAJpdDu7GnKjOhra7UglIDreouJY34mbl_sEuOMIEdoWegPKpVJ6pEZNEGQ_vCirh6U1P7E2ez7BTc6gMqlgoWSmpoEYS3h1g')",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/90 to-transparent"></div>

        <div className="relative w-full px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-tertiary font-bold tracking-widest text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-tertiary"></span>
              ĐỒNG HÀNH CÙNG CON BẠN
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-headline mb-6 leading-tight">
              Kiến tạo tương lai rạng rỡ <br />
              <span className="text-primary">cùng đội ngũ gia sư tận tâm</span>
            </h1>
            <p className="text-lg text-headline/80 max-w-xl mb-8">
              Chúng tôi hiểu rằng mỗi đứa trẻ là một cá thể duy nhất. Trung tâm
              Đỗ Hằng cam kết mang đến giải pháp học tập cá nhân hóa, giúp học
              sinh không chỉ giỏi kiến thức mà còn tự tin vào bản thân.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-headline/5 px-4 py-3 rounded-xl">
                <FontAwesomeIcon icon={faCheck} className="text-tertiary" />
                <span className="text-sm font-semibold">
                  100% Gia sư xác thực
                </span>
              </div>
              <div className="flex items-center gap-3 bg-headline/5 px-4 py-3 rounded-xl">
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-primary"
                />
                <span className="text-sm font-semibold">
                  Theo sát tiến độ 24/7
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-tertiary mb-4">
              Cam kết chất lượng Đỗ Hằng
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-sm text-headline/70 max-w-2xl mx-auto">
              Sự an tâm của phụ huynh và tiến bộ của học sinh là thước đo thành
              công lớn nhất của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item) => (
              <CommitmentCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                borderTopColor={item.borderTopColor}
                iconColor={item.iconColor}
                iconBg={item.iconBg}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-neutral/50 overflow-hidden">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-full bg-cover bg-center">
              <img src={hired} alt="anh" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-tertiary mb-8">
                Quy trình tuyển chọn & Xác thực 5 bước
              </h2>
              <div className="space-y-8">
                {steps.map(function (item) {
                  return (
                    <div
                      key={item.step}
                      className="flex gap-6 hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-headline font-bold flex items-center justify-center">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-headline mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-headline/70">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-tertiary mb-4">
                Minh bạch trong từng bước tiến
              </h2>
              <p className="text-sm text-headline/70">
                Chúng tôi tin rằng sự kết nối chặt chẽ giữa Gia sư - Phụ huynh -
                Trung tâm là chìa khóa để giúp học sinh tiến bộ nhanh nhất.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-neutral rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-headline/10">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Hệ thống báo cáo số hóa
                </h3>
                <p className="text-sm text-headline/70 mb-6">
                  Phụ huynh nhận được thông báo về tình hình học tập ngay sau
                  mỗi buổi học thông qua ứng dụng di động hoặc Zalo.
                </p>
                <ul className="space-y-3">
                  {[
                    "Điểm danh & Thái độ học tập",
                    "Kiến thức đã truyền đạt",
                    "Bài tập về nhà & Đánh giá mức độ hiểu bài",
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span className="text-sm font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-64 h-80 rounded-xl bg-white border border-headline/10 p-4 shadow-inner">
                <div className="flex flex-col gap-4">
                  <div className="w-full h-8 bg-neutral rounded animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full animate-pulse"></div>
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-neutral rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-neutral rounded w-1/2 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>Tiến độ môn Toán</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>Tiến độ môn Anh</span>
                      <span>72%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral rounded-full overflow-hidden">
                      <div className="w-[72%] h-full bg-tertiary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-tertiary text-white rounded-2xl p-8 flex flex-col justify-between border border-tertiary hover:scale-[1.02] transition-transform duration-300">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Đánh giá định kỳ hàng tháng
                </h3>
                <p className="text-sm opacity-80">
                  Bản phân tích chuyên sâu về sự thay đổi điểm số trên trường và
                  đề xuất điều chỉnh lộ trình nếu cần thiết.
                </p>
              </div>
              <div className="pt-8">
                <div className="text-4xl font-black text-secondary">100%</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mt-1">
                  Học sinh tiến bộ sau 1 tháng
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-white border border-headline/10 rounded-2xl p-8">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <h4 className="font-bold mb-2">CSKH 24/7</h4>
              <p className="text-sm text-headline/70">
                Luôn sẵn sàng lắng nghe mọi phản hồi và hỗ trợ phụ huynh ngay
                lập tức.
              </p>
            </div>

            <div className="md:col-span-8 bg-white border border-headline/10 rounded-2xl p-8">
              <h4 className="font-bold mb-2">
                Tư vấn chọn trường & Hướng nghiệp
              </h4>
              <p className="text-sm text-headline/70 max-w-lg ">
                Không chỉ dạy văn hóa, chuyên gia Đỗ Hằng còn hỗ trợ định hướng
                tương lai cho con em theo học tại trung tâm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactCard />
    </div>
  );
}

export default ParentPage;
