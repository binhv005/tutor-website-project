function JobCard({ job }) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group cursor-pointer relative overflow-hidden active:scale-[0.98]">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-headline font-medium">
              Mã lớp: DH{job.id}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                job.status === "AVAILABLE"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {job.status === "AVAILABLE" ? "Đang tuyển" : "Đã có gia sư"}
            </span>
          </div>

          <h3 className="text-xl font-bold text-tertiary">
            {job.subject} - {job.grade}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-map-marker-alt text-primary w-5 text-center"></i>
              <span>{job.address}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-calendar-alt text-primary w-5 text-center"></i>
              <span>{job.weeklySessions}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-user-graduate text-primary w-5 text-center"></i>
              <span>{job.teacherRequirement}</span>
            </div>

            {job.note && (
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <i className="fas fa-note-sticky text-primary w-5 text-center"></i>
                <span>{job.note}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 min-w-[160px] justify-between">
          <div className="text-right">
            <div className="text-xs text-slate-500">Học phí</div>

            <div className="text-xl font-bold text-primary">{job.tuition}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
