function DashboardTab() {
  return (
    <div className="font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Tổng quan Dashboard
      </h1>
      <p className="text-sm text-headline mb-8">
        Theo dõi hoạt động của trung tâm.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs text-headline font-semibold">
            Doanh thu tháng này
          </p>
          <h4 className="text-2xl font-bold text-primary mt-1">124.000.000đ</h4>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs text-headline font-semibold">Hồ sơ mới</p>
          <h4 className="text-2xl font-bold text-gray-800 mt-1">28</h4>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs text-headline font-semibold">Lớp đang tuyển</p>
          <h4 className="text-2xl font-bold text-tertiary mt-1">42</h4>
        </div>
      </div>
    </div>
  );
}

export default DashboardTab;
