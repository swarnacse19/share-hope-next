import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const campaignId = params.id;

  const objectId = new ObjectId(campaignId);

  const campaign = await dbConnect("campaigns").findOne({ _id: objectId });

  return NextResponse.json(campaign);
};
