
import React from 'react';


function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        {/* Icon and Title */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{icon}</div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Main Value */}
      <div className="mt-4">
        <p className="text-4xl font-bold text-[#027874]">
          {value}
        </p>
      </div>
      
      {/* Optional: Add a small trend/info line */}
      {/* <p className="mt-2 text-xs text-green-500">
        +15% from last month
      </p> */}
    </div>
  );
}

export default StatCard;