"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import MyAllCampaign from "./components/MyAllCampaign";

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- API Call: Data Fetching ---
  const fetchCampaigns = async () => {
    setError(null);
    try {
      const res = await fetch("http://localhost:3000/api/campaign", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch campaigns. Status: ${res.status}`);
      }

      const data = await res.json();
      setCampaigns(data);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
      setError("Failed to load campaigns.");
      toast.error("Campaigns load failed!");
      setCampaigns([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-24 text-xl">Loading campaigns...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  // --- Component JSX ---

  return (
    <div className="container mx-auto p-4">
      {campaigns.length === 0 ? (
        <div className="max-w-5xl mx-auto bg-gray-100 shadow-md rounded-xl py-24 text-center text-black">
          <h2 className="text-2xl font-semibold mb-2 text-red-600">
            No Campaigns Found
          </h2>
          <p className="text-gray-600">
            Please create your own campaign to get started.
          </p>
        </div>
      ) : (
        <MyAllCampaign campaigns={campaigns}></MyAllCampaign>
      )}

    </div>
  );
};

export default MyCampaigns;
