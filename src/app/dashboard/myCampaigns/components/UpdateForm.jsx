"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function UpdateForm({ data }) {
  console.log("from update form", data);
  const router = useRouter();

  const handleSubmit = async (e) => {
    toast("Updating..");
    e.preventDefault();
    const form = e.target;

    const newCampaign = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      goalAmount: parseInt(form.goalAmount.value),
      deadline: form.deadline.value,
    };

    const res = await fetch(
      `https://share-hope.vercel.app/api/campaign/${data._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(newCampaign),
      }
    );
    const postedResponse = await res.json();
    console.log("UPDATED DATA", postedResponse);
    router.push("/dashboard/myCampaigns");
    toast.success("Campaign Updated Successfully");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 my-20">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
        Update the Campaign data
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={data?.title}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={data?.image}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={data?.category}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Goal Amount</label>
          <input
            type="number"
            name="goalAmount"
            defaultValue={data?.goalAmount}
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
            defaultValue={data?.description}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deadline</label>
          <input
            type="date"
            name="deadline"
            defaultValue={data?.deadline}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Author Email</label>
          <input
            defaultValue={data?.createdBy}
            readOnly
            type="email"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div className="pt-4">
          <button type="submit" className="btn bg-teal-600 text-white w-full">
            Update Campaign
          </button>
        </div>
      </form>
    </div>
  );
}
