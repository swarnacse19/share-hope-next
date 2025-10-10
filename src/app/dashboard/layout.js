import ConditionalSidebar from "./components/ConditionalSidebar";

export const metadata = {
  title: "Dashboard | ShareHope",
  description: "User dashboard for ShareHope platform",
};

export default function DashboardLayout({ children }) {

  return (
    <div className="flex min-h-screen bg-gray-50 relative">

      <ConditionalSidebar></ConditionalSidebar>
      <div className="flex-1 md:ml-64 p-8 w-full mt-12 md:mt-0">
        {children}
      </div>
    </div>
  );
}