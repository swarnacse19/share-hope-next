import CampaignCard from "@/components/CampaignCard";
import dbConnect from "@/lib/dbConnect";
import React from "react";


export default async function AllCampaigns() {

  const campaigns = await dbConnect("campaigns").find({}).toArray();

  if (!campaigns || campaigns.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Campaigns</h1>
        <p className="text-lg text-gray-600">
          No active campaigns found at the moment. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 border-b pb-4">
        Explore All Active Campaigns
      </h1>

      <div
        className="grid grid-cols-1 gap-8 
                          md:grid-cols-2 
                          lg:grid-cols-3 
                          "
      >
        {/* 3. Map over Data and Render Card */}
        {campaigns.map((campaign) => (
          // Using the MongoDB '_id' as the unique key
          <CampaignCard key={campaign._id.toString()} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
