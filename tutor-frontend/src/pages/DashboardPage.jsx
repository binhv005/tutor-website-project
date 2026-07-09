import Sidebar from "../components/Sidebar";
import DashboardTab from "../components/DashboardTab";
import ClassManagerTab from "../components/ClassManagerTab";
import ContactManagerTab from "../components/ContactManagerTab";
import ChangePasswordTab from "../components/ChangePasswordTab";
import { useState } from "react";

function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "class-manager":
        return <ClassManagerTab />;
      case "contact-manager":
        return <ContactManagerTab />;
      case "change-password":
        return <ChangePasswordTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="bg-neutral min-h-screen text-gray-800 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="md:ml-64 min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-4">
            <h2 className="text-lg md:text-xl font-bold text-primary">
              Trung tâm Gia sư Đỗ Hằng
            </h2>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-[1280px] mx-auto w-full flex flex-col gap-8">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
