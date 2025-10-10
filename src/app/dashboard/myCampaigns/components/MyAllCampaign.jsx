
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

export default function MyAllCampaign({ campaigns }) {
  
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <table className="table w-full shadow-md">
        <thead>
          <tr className="bg-amber-100 text-center">
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Goal</th>
            <th>Raised</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c._id} className="text-center bg-teal-50">
              <td>
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-20 h-20 object-contain mx-auto"
                />
              </td>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>{c.goalAmount}</td>
              <td>{c.raisedAmount}</td>
              <td className="flex flex-col md:flex-row justify-center items-center gap-2">
                <Link href={`/dashboard/myCampaigns/${c._id}`} className="px-3 py-1 bg-green-700 hover:bg-green-800 w-20 cursor-pointer text-white rounded transition">
                  Update
                </Link>
                <DeleteButton id={c._id}></DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
