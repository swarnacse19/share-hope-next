import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
    const campaignCollection = dbConnect("campaigns")
    const p = await params;
    const query = { _id: new ObjectId(p.id) }

    // Validation
    const session = await getServerSession(authOptions)
    const current = await campaignCollection.findOne(query)

    const isOwnerOK = session?.user?.email == current.createdBy

    if (isOwnerOK) {
        // Deleting User specific booking

        const deleteResponse = await campaignCollection.deleteOne(query)
        revalidatePath("/dashboard/myCampaigns")
        return NextResponse.json(deleteResponse)
    }
    else {
        return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 })
    }
}

export const GET = async (req, { params }) => {
  const campaignId = params.id;

  const objectId = new ObjectId(campaignId);

  const campaign = await dbConnect("campaigns").findOne({ _id: objectId });

  return NextResponse.json(campaign);
};

export const PATCH = async (req, { params }) => {
    const p = await params;
    const campaignCollection = dbConnect("campaigns")
    const query = { _id: new ObjectId(p.id) }

    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const current = await campaignCollection.findOne(query)
    const isOwnerOK = email === current?.createdBy

    if (isOwnerOK) {
        const body = await req.json()

        const filter = {
            $set: { ...body }
        }

        const option = {
            upsert: true
        }
        const updateResponse = await campaignCollection.updateOne(query, filter, option)
        revalidatePath("/dashboard/myCampaigns")
        return NextResponse.json(updateResponse)
    }
    else {
        return NextResponse.json({ message: "Forbidden Update action" }, {
            status: 403
        })
    }

}
