import { headers } from "next/headers";
import MyAllCampaign from "./components/MyAllCampaign";

const fetchCampaigns = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/campaign`, {
      method: "GET",
      headers: new Headers(await headers()),
      cache: "no-store", 
    });

    if (!res.ok) {
      console.error("Failed to fetch campaigns:", res.statusText);
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return [];
  }
};

export const dynamic = "force-dynamic";

export default async function MyCampaigns() {
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
        <MyAllCampaign campaigns={campaigns} />
      )}
    </div>
  );
}
