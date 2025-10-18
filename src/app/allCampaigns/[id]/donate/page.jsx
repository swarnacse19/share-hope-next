
import React from "react";
import DonateWrapper from "./components/DonateWrapper";

export default async function DonatePage({ params }) {
  
  const campaignId = params.id; 

  return (
    <div className="container mx-auto mt-10">
      <DonateWrapper campaignId={campaignId} />
    </div>
  );
}