"use client";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

export default function CreateCampaign() {
  const { data: session } = useSession();
//   console.log(session);

  const handleSubmit = async (e) =>{
    toast("Creating..");
    e.preventDefault();
    const form = e.target;

    const newCampaign = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      goalAmount: parseInt(form.goalAmount.value),
      raisedAmount: 500, 
      deadline: form.deadline.value,
      createdBy: session?.user?.email, 
      donors: [], 
      status: "Active", 
      createdAt: new Date().toISOString(),
    };

    const res = await fetch(
      "http://localhost:3000/api/campaign",
      {
        method: "POST",
        body: JSON.stringify(newCampaign),
      }
    );
    const postedResponse = await res.json();
    console.log("POSTED DATA", postedResponse);
    toast.success("Campaign Created Successfully");
  }
  
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 my-20">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
        Create New Campaign
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            name="category"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Goal Amount</label>
          <input
            type="number"
            name="goalAmount"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deadline</label>
          <input
            type="date"
            name="deadline"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Author Name</label>
            <input
              defaultValue={session?.user?.name}
              readOnly
              type="text"
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Author Email</label>
            <input
              defaultValue={session?.user?.email}
              readOnly
              type="email"
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
        </div>

        <div className="pt-4">
          <button type="submit" className="btn bg-teal-600 text-white w-full">
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  );
}
