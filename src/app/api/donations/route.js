import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);

  if (session) {
    const email = session?.user?.email;
    const donationCollection = dbConnect("donations");

    const result = await donationCollection.find({ donorId: email }).toArray();
    return NextResponse.json(result);
  }

  return NextResponse.json([]);
};

export const POST = async (req) => {
  const body = await req.json();
//   console.log(body);
  const { campaignId, amount, transactionId } = body;

  const donationCollection = dbConnect("donations");
  const campaignCollection = dbConnect("campaigns");

  const donationResult = await donationCollection.insertOne(body);
//   console.log(donationResult);

  if (donationResult.insertedId) {
    const campaignObjectId = new ObjectId(campaignId);

    const campaign = await campaignCollection.findOne({ _id: campaignObjectId });

    if (campaign) {
      const newRaisedAmount = (campaign.raisedAmount || 0) + Number(amount);

      const newDonor = {
        donorId: body.donorId,
        amount: Number(amount),
        date: new Date().toISOString(),
        transactionId,
      };

      await campaignCollection.updateOne(
        { _id: campaignObjectId },
        {
          $set: { raisedAmount: newRaisedAmount },
          $push: { donors: newDonor },
        }
      );
    }
  }

  return NextResponse.json({ success: true });
};
