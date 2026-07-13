import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import { getClasses } from "../api/class.api";

const popularTags = [
  "Toán lớp 12",
  "IELTS 6.5+",
  "Lý lớp 9",
  "Tiếng Nhật N3",
  "Luyện chữ đẹp",
  "Piano cơ bản",
];

function TutorPage() {
  const [jobs, setJobs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const { data } = await getClasses({
        status: "AVAILABLE",
      });

      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
      font-sans
      bg-neutral
      text-slate-800
      p-4
      md:p-8
      max-w-7xl
      mx-auto
      space-y-12
    "
    >
      <div>
        <h1
          className="
          text-4xl
          font-extrabold
          mb-4
        "
        >
          Tìm lớp phù hợp với bạn
        </h1>

        <p
          className="
          text-lg
          text-headline
        "
        >
          Khám phá hàng trăm cơ hội giảng dạy mới mỗi ngày.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
      "
      >
        <div
          className="
          lg:col-span-2
          space-y-6
        "
        >
          {currentJobs.length === 0 ? (
            <div
              className="
              bg-white
              rounded-xl
              border
              p-10
              text-center
            "
            >
              Hiện chưa có lớp đang tuyển.
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {currentJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>

        <div className="space-y-8">
          <div
            className="
            bg-tertiary
            p-8
            rounded-xl
            text-white
          "
          >
            <h4
              className="
              text-2xl
              font-bold
              mb-4
            "
            >
              Bạn chưa là gia sư?
            </h4>

            <p
              className="
              text-sm
              mb-6
            "
            >
              Đăng ký trở thành gia sư để tiếp cận các lớp học chất lượng.
            </p>

            <button
              className="
              bg-secondary
              text-slate-900
              w-full
              py-3
              rounded-lg
              font-bold
            "
            >
              Đăng ký ngay
            </button>
          </div>

          <div
            className="
            bg-white
            p-6
            rounded-xl
            border
          "
          >
            <h4
              className="
              font-bold
              mb-4
            "
            >
              Môn học phổ biến
            </h4>

            <div
              className="
              flex
              flex-wrap
              gap-2
            "
            >
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className="
                      px-3
                      py-1
                      rounded-full
                      bg-neutral
                      border
                      text-xs
                    "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="
            grid
            grid-cols-2
            gap-4
          "
          >
            <div
              className="
              bg-white
              border
              p-4
              rounded-lg
              text-center
            "
            >
              <div
                className="
                text-2xl
                font-bold
                text-primary
              "
              >
                {jobs.length}
              </div>

              <p className="text-xs">Lớp đang tuyển</p>
            </div>

            <div
              className="
              bg-white
              border
              p-4
              rounded-lg
              text-center
            "
            >
              <div
                className="
                text-2xl
                font-bold
                text-primary
              "
              >
                10k+
              </div>

              <p className="text-xs">Gia sư tin dùng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorPage;
