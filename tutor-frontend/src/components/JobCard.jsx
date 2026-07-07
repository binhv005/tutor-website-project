function JobCard({ job }) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group cursor-pointer relative overflow-hidden active:scale-[0.98]">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-4 flex-1">
          <span className="text-headline font-medium">Mã lớp: {job.code}</span>
          <h3 className="text-xl font-bold text-tertiary">{job.title}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-map-marker-alt text-primary w-5 text-center"></i>
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-calendar-alt text-primary w-5 text-center"></i>
              <span>{job.schedule}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-clock text-primary w-5 text-center"></i>
              <span>{job.time}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <i className="fas fa-user-graduate text-primary w-5 text-center"></i>
              <span>{job.requirement}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 min-w-[140px] justify-between">
          <div className="text-right w-full">
            <div className="text-xs text-slate-500">Mức lương / tháng</div>
            <div className="text-xl font-bold text-primary">{job.salary}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
