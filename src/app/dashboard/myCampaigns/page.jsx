
import MyAllCampaign from "./components/MyAllCampaign";
import { headers } from "next/headers";

const fetchCampaigns = async () => {
    const res = await fetch("http://localhost:3000/api/campaign", {
      method: "GET",
      headers: headers(),
    });

    const d = await res.json();
    return d;
  }

const MyCampaigns = async () => {
  const campaigns = await fetchCampaigns();
  
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
