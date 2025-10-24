import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json([], { status: 200 }); 
    }

    const email = session.user?.email;
    const campaignCollection = await dbConnect("campaigns");

    const result = await campaignCollection.find({ createdBy: email }).toArray();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) =>{
    const body = await req.json();
    const campaignCollection = dbConnect("campaigns")
    const result = await campaignCollection.insertOne(body)
    return NextResponse.json(result);
}