import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { differenceInDays, isPast } from "date-fns";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

const calculateDaysLeft = (dateString) => {
  const deadlineDate = new Date(dateString);
  const today = new Date();

  if (isPast(deadlineDate) && differenceInDays(deadlineDate, today) <= 0) {
    return "Deadline passed";
  }

  const diffDays = differenceInDays(deadlineDate, today);
  return `${diffDays} days left`;
};

export default async function CampaignDetailsPage({ params }) {
  const campaignId = params.id;

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/campaign/${campaignId}`
  );
  const campaign = await res.json();

  if (!campaign) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Campaign Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          The campaign you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  // Calculate percentage raised
  const percentage = Math.min(
    100,
    Math.round((campaign.raisedAmount / campaign.goalAmount) * 100)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2 p-6 md:p-10">
            {/* Image Section */}
            <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden mb-6">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover 
               transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title & Category */}
            <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">
              {campaign.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {campaign.title}
            </h1>

            {/* Description */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
              About the Program
            </h2>
            <p className="text-lg text-gray-600 whitespace-pre-wrap">
              {campaign.description}
            </p>

            {/* Additional Info / Donor List (Optional) */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Recent Donors ({campaign.donors.length})
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm max-h-40 overflow-y-auto">
                {campaign.donors.slice(0, 5).map((donor, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b border-gray-100 pb-1"
                  >
                    <span className="font-medium">
                      {donor.donorId.split("@")[0]}***
                    </span>
                    <span className="font-semibold text-green-700">
                      {formatCurrency(donor.amount)}
                    </span>
                  </li>
                ))}
                {campaign.donors.length === 0 && (
                  <p className="text-gray-500 italic">
                    Be the first to donate!
                  </p>
                )}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Summary & Donation Widget */}
          <div className="lg:col-span-1 p-6 md:p-10 bg-gray-50/70 lg:border-l border-gray-100">
            {/* Progress Summary Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 sticky top-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Funding Progress
              </h3>

              {/* Raised Amount */}
              <p className="text-3xl font-extrabold text-green-600 mb-1">
                {formatCurrency(campaign.raisedAmount)}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                raised of{" "}
                <span className="font-semibold">
                  {formatCurrency(campaign.goalAmount)}
                </span>{" "}
                goal
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-indigo-600 h-4 rounded-full transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm font-medium mb-6">
                <span className="text-indigo-600">{percentage}% Funded</span>
                <span className="text-red-500">
                  {calculateDaysLeft(campaign.deadline)}
                </span>
              </div>

              <Link
                href={`/allCampaigns/${campaignId}/donate`}
                className="w-full inline-block text-center py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-300"
              >
                Donate Now
              </Link>

              {/* Created By Info */}
              <p className="text-center text-xs text-gray-500 mt-4">
                Campaign created by:{" "}
                <span className="font-semibold text-gray-700">
                  {campaign.createdBy}
                </span>
              </p>
            </div>

            {/* Optional: Share Section */}
            <div className="mt-6 text-center">
              <div className="flex justify-center items-center gap-2">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Share this campaign
                </p>
                <FaRegShareFromSquare />
              </div>
              {/* Social Share Icons/Buttons Placeholder */}
              <div className="flex justify-center space-x-4">
                {/* Add your social media icons here */}
                <button className="text-blue-500 hover:text-blue-700">
                  <FaFacebookF size={20} />
                </button>
                <button className="text-sky-500 hover:text-sky-700">
                  <FaTwitter size={20} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
