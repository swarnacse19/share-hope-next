
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Dashboard | ShareHope",
  description: "User dashboard for ShareHope platform",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 1. Left Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* 2. Right Content Area */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}