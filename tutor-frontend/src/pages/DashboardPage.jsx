import { useState } from "react";

import Sidebar from "../components/Sidebar";

import ClassManagerTab from "../components/ClassManagerTab";
import ContactManagerTab from "../components/ContactManagerTab";
import ChangePasswordTab from "../components/ChangePasswordTab";

function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "class-manager":
        return <ClassManagerTab />;

      case "contact-manager":
        return <ContactManagerTab />;

      case "change-password":
        return <ChangePasswordTab />;

      default:
        return <ClassManagerTab />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="md:ml-64">
        <header className="bg-white border-b sticky top-0 z-30">
          <div className="h-16 flex items-center justify-between px-6">
            <div>
              <h1 className="text-xl font-bold text-primary">
                Hệ thống quản trị
              </h1>

              <p className="text-sm text-gray-500">Trung tâm Gia sư Đỗ Hằng</p>
            </div>
          </div>
        </header>

        <div className="p-6">{renderTabContent()}</div>
      </main>
    </div>
  );
}

export default DashboardPage;
