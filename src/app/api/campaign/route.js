import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const body = await req.json();
    const campaignCollection = dbConnect("campaigns")
    const result = await campaignCollection.insertOne(body)
    return NextResponse.json(result);
}