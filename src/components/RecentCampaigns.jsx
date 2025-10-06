
import dbConnect from "@/lib/dbConnect";
import React from "react";
import CampaignCard from "./CampaignCard";

export default async function RecentCampaigns() {
  
  const campaignCollection = await dbConnect("campaigns");

  // 2. Query the database:
  const campaigns = await campaignCollection
    .find({})
    .sort({ createdAt: -1 }) 
    .limit(6) 
    .toArray();

  // --- No Campaigns Found State ---
  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Recent Campaigns</h1>
        <p className="text-lg text-gray-600">
          No new campaigns have been started recently.
        </p>
      </div>
    );
  }

  // --- Display Recent Campaigns ---
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 pb-4">
        Discover the Latest Campaigns
      </h1>

      <div
        className="grid grid-cols-1 gap-8 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   "
      >
        {/* 3. Map over the 6 recent campaigns and Render Card */}
        {campaigns.map((campaign) => (
          // Using the MongoDB '_id' as the unique key
          <CampaignCard key={campaign._id.toString()} campaign={campaign} />
        ))}
      </div>
      
      {/* Optional: Add a button/link to see ALL campaigns */}
      <div className="text-center mt-12">
        <a 
          href="/allCampaigns" 
          className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
        >
          View All Campaigns
        </a>
      </div>
    </div>
  );
}