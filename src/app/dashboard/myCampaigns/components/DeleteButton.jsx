"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

export default function DeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async (campaignId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this campaign!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://share-hope.vercel.app/api/campaign/${campaignId}`,
          {
            method: "DELETE",
          }
        );

        const data = await res.json();
        console.log(data);

        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "The campaign has been successfully deleted.",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          router.refresh();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Could not delete the campaign. Please try again.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Deletion error:", error);
        Swal.fire({
          title: "Network Error",
          text: "An error occurred while connecting to the server.",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <button
        onClick={() => handleDelete(id)}
        className="px-3 py-1 bg-red-500 hover:bg-red-600 cursor-pointer w-20 text-white rounded transition"
      >
        Delete
      </button>
    </>
  );
}
