import React from "react";
import StatCard from "./components/StatCard";
import RecentActivity from "./components/RecentActivity";
import Link from "next/link";

async function DashboardPage() {
  const stats = [
    { title: "Total Campaigns", value: "5", icon: "✨" },
    { title: "Funds Raised (BDT)", value: "৳1,50,000", icon: "💰" },
    { title: "Pending Approvals", value: "2", icon: "⏳" },
  ];

  const activities = [
    { type: "Campaign Created", name: "Education for All", date: "2 days ago" },
    {
      type: "Donation Received",
      name: "৳5,000 for Flood Relief",
      date: "5 hours ago",
    },
    {
      type: "Profile Updated",
      name: "Added new contact info",
      date: "1 week ago",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extrabold text-[#027874]">
        Welcome Back, User!
      </h2>

      {/* 1. Statistics / Summary Section (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* 2. Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentActivity activities={activities} />
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100 space-y-4 h-fit">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-3">
            Quick Actions
          </h3>
          <Link
            href="/dashboard/createCampaign"
            className="block w-full text-center py-3 rounded-lg font-medium transition duration-300 bg-[#04b1ac] text-white hover:bg-[#027874] shadow-md"
          >
            Start a New Campaign
          </Link>
          <Link
            href="/dashboard/myProfile"
            className="block w-full text-center py-3 rounded-lg font-medium transition duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Update Your Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
