import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export const GET = async (req) => {
  const session = await getServerSession(authOptions);

  if (session) {
    const email = session?.user?.email;
    const donationCollection = dbConnect("donations");

    const result = await donationCollection.find({ email: email }).toArray();
    return NextResponse.json(result);
  }

  return NextResponse.json([]);
};

// ✅ POST: Add a new donation
export const POST = async (req) => {
  const body = await req.json();
  const donationCollection = dbConnect("donations");

  const result = await donationCollection.insertOne(body);
  return NextResponse.json(result);
};
