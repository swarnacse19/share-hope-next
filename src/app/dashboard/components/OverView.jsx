"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function OverView({ data }) {
  if (!data) {
    return <div className="text-center mt-10 text-gray-600">No data available.</div>;
  }

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold text-[#027874] mb-6">Dashboard Overview</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#04b1ac]">
          <h3 className="text-gray-600 text-sm font-medium">Total Campaigns</h3>
          <p className="text-3xl font-bold text-[#027874] mt-2">{data.totalCampaigns}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#04b1ac]">
          <h3 className="text-gray-600 text-sm font-medium">Total Funds Raised</h3>
          <p className="text-3xl font-bold text-[#027874] mt-2">${data.totalFundsRaised}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#04b1ac]">
          <h3 className="text-gray-600 text-sm font-medium">Total Donations Made</h3>
          <p className="text-3xl font-bold text-[#027874] mt-2">{data.totalDonationsCount}</p>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Donations</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data.monthlyDonations}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#04b1ac" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
