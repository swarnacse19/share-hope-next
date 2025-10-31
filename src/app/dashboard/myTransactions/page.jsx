import { headers } from "next/headers";
import React from "react";

const fetchDonations = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/donations`, {
    method: "GET",
    headers: new Headers(await headers()),
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const MyDonations = async () => {
  const donations = await fetchDonations();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        My Transactions
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Amount ($)</th>
              <th className="px-4 py-2 text-left">Transaction ID</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations && donations.length > 0 ? (
              donations.map((donation, index) => (
                <tr
                  key={donation._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 font-medium text-green-700">
                    {donation.amount}
                  </td>
                  <td className="px-4 py-2">{donation.transactionId}</td>
                  <td className="px-4 py-2">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No Transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;