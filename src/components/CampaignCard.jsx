import React from "react";
import Link from "next/link";
import { calculateDaysLeft } from "./calculateDaysLeft";

const CampaignCard = ({ campaign }) => {
  const { title, description, category, image, goalAmount, raisedAmount, deadline, _id } =
    campaign;

  const percentage = Math.min(
    100,
    Math.round((raisedAmount / goalAmount) * 100)
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <Link href={`/allCampaigns/${_id}`} passHref className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
        {/* Campaign Image */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover 
               transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight transition duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>

          <p className="text-sm text-gray-700 mb-4 font-medium">
            Category : {category}
          </p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs font-medium mt-1">
              <span className="text-indigo-600">{percentage}% Raised</span>
              <span className="text-gray-500">
                {calculateDaysLeft(deadline)}
              </span>
            </div>
          </div>

          {/* Amounts */}
          <div className="flex justify-between items-center text-sm font-semibold mt-auto pt-3 border-t border-gray-100">
            <div>
              <p className="text-gray-500">Raised:</p>
              <p className="text-lg text-green-600">
                {formatCurrency(raisedAmount)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Goal:</p>
              <p className="text-lg text-gray-800">
                {formatCurrency(goalAmount)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
