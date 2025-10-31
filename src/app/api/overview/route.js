import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

export async function GET(req) {
  try {
    
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const userEmail = session.user.email;
    
    const campaignsColl = dbConnect("campaigns");
    const donationsColl = dbConnect("donations");

    const totalCampaigns = await campaignsColl.countDocuments({ createdBy: userEmail });

    const fundsAgg = await campaignsColl.aggregate([
      { $match: { createdBy: userEmail } },
      { $group: { _id: null, totalRaised: { $sum: "$raisedAmount" } } },
    ]).toArray();
    const totalFundsRaised = (fundsAgg[0] && fundsAgg[0].totalRaised) || 0;

    const donationsAgg = await donationsColl.aggregate([
      { $match: { donorId: userEmail } },
      { $group: { _id: null, totalDonationsAmount: { $sum: "$amount" }, count: { $sum: 1 } } },
    ]).toArray();
    const totalDonationsAmount = (donationsAgg[0] && donationsAgg[0].totalDonationsAmount) || 0;
    const totalDonationsCount = (donationsAgg[0] && donationsAgg[0].count) || 0;

    const monthlyAgg = await donationsColl.aggregate([
  { $match: { donorId: userEmail } },
  {
    $addFields: {
      date: {
        $cond: [
          { $eq: [{ $type: "$date" }, "string"] },
          { $toDate: "$date" },
          "$date"
        ]
      }
    }
  },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
      total: { $sum: "$amount" }
    }
  },
  { $sort: { "_id": 1 } }
]).toArray();


    const monthlyMap = {};
    monthlyAgg.forEach((m) => {
      monthlyMap[m._id] = m.total;
    });

    // Fill missing months
    const now = new Date();
    const months = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toISOString().slice(0, 7);
      months.push({
        month: key,
        total: monthlyMap[key] || 0
      });
    }

    return new Response(JSON.stringify({
      totalCampaigns,
      totalFundsRaised,
      totalDonationsCount,
      totalDonationsAmount,
      monthlyDonations: months
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
