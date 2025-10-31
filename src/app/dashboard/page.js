import { headers } from "next/headers";
import OverView from "./components/OverView";

export default async function OverviewPage() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/overview`, {
    headers: headers(),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch overview data:", res.status);
    return (
      <div className="text-center mt-10 text-red-600">
        Failed to load overview data.
      </div>
    );
  }

  const data = await res.json();

  return <OverView data={data} />;
}
