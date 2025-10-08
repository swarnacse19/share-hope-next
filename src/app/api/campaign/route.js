import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) =>{

    const session = await getServerSession(authOptions)
    if(session){
        const email = session?.user?.email;
        const campaignCollection = dbConnect("campaigns")
        const result = await campaignCollection.find({createdBy: email}).toArray();

        return NextResponse.json(result);
    }

    return NextResponse.json({})
}

export const POST = async (req) =>{
    const body = await req.json();
    const campaignCollection = dbConnect("campaigns")
    const result = await campaignCollection.insertOne(body)
    return NextResponse.json(result);
}