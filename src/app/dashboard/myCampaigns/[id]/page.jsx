import React from "react";
import UpdateForm from "../components/UpdateForm";

export default async function UpdateCampaign({ params }) {
  const p = await params;
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/campaign/${p.id}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <UpdateForm data={data}></UpdateForm>
    </div>
  );
}
