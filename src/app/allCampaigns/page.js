import dbConnect from '@/lib/dbConnect'
import React from 'react'

export default async function AllCampaigns() {
    const data = await dbConnect("campaigns").find({}).toArray();
    console.log(data);
  return (
    <div>
        <p>data</p>
    </div>
  )
}
