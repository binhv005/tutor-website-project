import JobCard from "../components/JobCard";
const jobsData = [
  {
    id: 1,
    code: "DH2024-01",
    status: "Mới đăng",
    title: "Toán & Tiếng Việt - Lớp 3",
    location: "Lê Văn Sỹ, Quận 3, TP.HCM",
    schedule: "3 buổi/tuần (T2-T4-T6)",
    time: "18:00 - 19:30",
    requirement: "Nữ (SV Sư phạm ưu tiên)",
    salary: "2.400.000đ",
  },
  {
    id: 2,
    code: "DH2024-02",
    status: "Cần gấp",
    title: "Tiếng Anh - Lớp 10 (Luyện thi)",
    location: "Đường Phan Xích Long, Phú Nhuận",
    schedule: "2 buổi/tuần (T7-CN)",
    time: "Sáng 09:00 - 11:00",
    requirement: "Giáo viên chuyên Anh",
    salary: "4.000.000đ",
  },
  {
    id: 3,
    code: "DH2024-03",
    status: "Đang xem xét",
    title: "Vật Lý - Lớp 12 (Ôn thi ĐH)",
    location: "Hẻm 45 Đinh Bộ Lĩnh, Bình Thạnh",
    schedule: "3 buổi/tuần (T3-T5-T7)",
    time: "19:30 - 21:00",
    requirement: "SV năm 3-4 chuyên ngành Sư phạm Lý",
    salary: "3.200.000đ",
  },
];

const popularTags = [
  "Toán lớp 12",
  "IELTS 6.5+",
  "Lý lớp 9",
  "Tiếng Nhật N3",
  "Luyện chữ đẹp",
  "Piano cơ bản",
];

function TutorPage() {
  return (
    <div className="font-sans bg-neutral text-slate-800 p-4 md:p-8 max-w-7xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold mb-4 text-slate-950">
          Tìm lớp phù hợp với bạn
        </h1>
        <p className="text-lg text-headline max-w-2xl">
          Khám phá hàng trăm cơ hội giảng dạy mới mỗi ngày. Giúp học sinh tiến
          bộ và nâng cao thu nhập của chính bạn.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-headline block">
              Môn học
            </label>
            <select className="w-full bg-neutral border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm">
              <option>Tất cả môn học</option>
              <option>Toán học</option>
              <option>Ngữ văn</option>
              <option>Tiếng Anh</option>
              <option>Vật lý</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-headline block">
              Khối lớp
            </label>
            <select className="w-full bg-neutral border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm">
              <option>Tất cả khối</option>
              <option>Tiểu học</option>
              <option>THCS</option>
              <option>THPT</option>
              <option>Luyện thi đại học</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-headline block">
              Khu vực
            </label>
            <select className="w-full bg-neutral border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm">
              <option>Tất cả khu vực</option>
              <option>Quận 1</option>
              <option>Quận 3</option>
              <option>Quận Bình Thạnh</option>
              <option>Quận Tân Bình</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-headline block">
              Mức lương tối thiểu
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-neutral border border-slate-300 rounded-lg pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-tertiary transition-all outline-none text-sm"
                placeholder="Ví dụ: 2,000,000"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-headline text-xs font-bold">
                đ
              </span>
            </div>
          </div>

          <button className="bg-tertiary text-white h-[46px] rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors cursor-pointer">
            <i className="fas fa-search"></i>
            Tìm kiếm
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}

          <div className="flex justify-center pt-8">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <i className="fas fa-chevron-left text-sm"></i>
              </button>
              <button className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-bold text-sm">
                1
              </button>
              <button className="w-10 h-10 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer text-sm">
                2
              </button>
              <button className="w-10 h-10 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer text-sm">
                3
              </button>
              <button className="w-10 h-10 rounded border border-slate-300 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <i className="fas fa-chevron-right text-sm"></i>
              </button>
            </nav>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-tertiary p-8 rounded-xl text-white shadow-lg relative overflow-hidden group">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4">Bạn chưa là gia sư?</h4>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Đăng ký trở thành gia sư ngay hôm nay để có cơ hội tiếp cận hàng
                nghìn lớp học chất lượng cao và nhận mức thu nhập hấp dẫn.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li class="flex items-center gap-3">
                  <i className="fas fa-check-circle text-secondary"></i>
                  <span>Phí nhận lớp ưu đãi</span>
                </li>
                <li class="flex items-center gap-3">
                  <i className="fas fa-check-circle text-secondary"></i>
                  <span>Hỗ trợ giáo trình dạy</span>
                </li>
                <li class="flex items-center gap-3">
                  <i className="fas fa-check-circle text-secondary"></i>
                  <span>Thanh toán minh bạch</span>
                </li>
              </ul>
              <button className="bg-secondary text-slate-900 w-full py-3.5 rounded-lg font-bold hover:brightness-105 transition-all shadow-md cursor-pointer text-center text-sm uppercase">
                Đăng ký gia sư ngay
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h4 className="text-lg font-bold mb-4 text-slate-900">
              Môn học phổ biến
            </h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-neutral text-headline rounded-full text-xs font-medium border border-slate-200 hover:border-primary transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-headline mt-1">
                Lớp mới mỗi tháng
              </div>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-xs text-headline mt-1">Gia sư tin dùng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorPage;
