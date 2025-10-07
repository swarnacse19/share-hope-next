
import React from 'react';


function RecentActivity({ activities }) {
  
  const getIconAndColor = (type) => {
    switch (type) {
      case "Donation Received":
        return { icon: "✅", color: "text-green-600 bg-green-50" };
      case "Campaign Created":
        return { icon: "🚀", color: "text-blue-600 bg-blue-50" };
      case "Profile Updated":
        return { icon: "📝", color: "text-yellow-600 bg-yellow-50" };
      default:
        return { icon: "🔔", color: "text-gray-600 bg-gray-50" };
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-4">
        Recent Activity
      </h3>

      <ul className="space-y-4 divide-y divide-gray-100">
        {activities.map((activity, index) => {
          const { icon, color } = getIconAndColor(activity.type);
          
          return (
            <li key={index} className="flex items-start justify-between pt-4 first:pt-0">
              <div className="flex items-center space-x-4">
                {/* Activity Icon */}
                <div className={`p-2 rounded-full ${color} text-lg`}>
                  {icon}
                </div>
                
                {/* Activity Details */}
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {activity.type}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {activity.name}
                  </p>
                </div>
              </div>
              
              {/* Timestamp */}
              <time className="text-xs text-gray-400 flex-shrink-0 mt-1">
                {activity.date}
              </time>
            </li>
          );
        })}
        
        {activities.length === 0 && (
          <p className="text-gray-500 py-4 text-center">No recent activity yet.</p>
        )}
      </ul>
    </div>
  );
}

export default RecentActivity;