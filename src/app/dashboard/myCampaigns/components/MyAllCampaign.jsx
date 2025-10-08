"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function MyAllCampaign({campaigns}) {

     const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(
      `http://localhost:3000/api/campaign/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  };
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
            <tr key={c._id} className="text-center bg-gray-100">
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
              <td className="space-x-2">
                <button
                  onClick={() => {
                    setSelectedCampaign(c);
                    setIsModalOpen(true);
                  }}
                  className="px-3 py-1 bg-green-700 hover:bg-green-800 text-white rounded transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(c._id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
