import React from "react";
import { FaMedal, FaMapMarkerAlt } from "react-icons/fa";

const donors = [
  {
    id: 1,
    name: "Ayesha Rahman",
    avatar: "https://i.pravatar.cc/150?img=32",
    amount: 12000,
    location: "Dhaka, Bangladesh",
    donatedAt: "Oct 12, 2025",
    note: "For emergency surgery fund",
  },
  {
    id: 2,
    name: "Michael Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    amount: 9000,
    location: "New York, USA",
    donatedAt: "Oct 08, 2025",
    note: "Supporting education campaign",
  },
  {
    id: 3,
    name: "Sadia Islam",
    avatar: "https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg",
    amount: 7000,
    location: "Chattogram, Bangladesh",
    donatedAt: "Sep 30, 2025",
    note: "Animal welfare support",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    avatar: "https://images.pexels.com/photos/50855/pexels-photo-50855.jpeg?cs=srgb&dl=pexels-joelson-melo-9135-50855.jpg&fm=jpg",
    amount: 4500,
    location: "Lisbon, Portugal",
    donatedAt: "Sep 25, 2025",
    note: "Community rebuild",
  },
  {
    id: 5,
    name: "Nina Patel",
    avatar: "https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583035_960_720.jpg",
    amount: 3000,
    location: "London, UK",
    donatedAt: "Sep 18, 2025",
    note: "Small business grant",
  },
];

const formatCurrency = (n) => {
  return n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};

export default function TopDonors() {
  const max = Math.max(...donors.map((d) => d.amount));

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">Top Donors</h3>
          <p className="mt-1 mb-5 text-sm text-gray-500 max-w-xl">
            Our community power — recent generous supporters who are helping
            campaigns reach their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor, idx) => (
            <article
              key={donor.id}
              className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={donor.avatar}
                    alt={donor.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />

                  {/* medal for top 3 */}
                  {idx < 3 && (
                    <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                      <FaMedal
                        className={`h-4 w-4 ${
                          idx === 0
                            ? "text-yellow-400"
                            : idx === 1
                            ? "text-gray-400"
                            : "text-amber-700"
                        }`}
                      />
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {donor.name}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <FaMapMarkerAlt className="w-3 h-3 text-gray-400" />
                        <span className="truncate">{donor.location}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium text-teal-700">
                        {formatCurrency(donor.amount)}
                      </p>
                      <p className="text-xs text-gray-400">{donor.donatedAt}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-600 truncate">
                    {donor.note}
                  </p>

                  {/* progress bar relative to top donation */}
                  <div className="mt-4">
                    <div className="w-full bg-white rounded-full h-2 shadow-inner">
                      <div
                        className="rounded-full h-2"
                        style={{
                          width: `${Math.round((donor.amount / max) * 100)}%`,
                          background: "linear-gradient(90deg,#14b8a6,#06b6d4)",
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                      <span>{Math.round((donor.amount / max) * 100)}%</span>
                      <span>{formatCurrency(donor.amount)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* highlight strip */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-teal-50 to-white p-4 border border-teal-100">
          <div className="flex-1 text-sm text-gray-700">
              <strong className="text-gray-900">Community impact:</strong>{" "}
              Together these recent donors contributed{" "}
              <strong>
                {formatCurrency(donors.reduce((s, d) => s + d.amount, 0))}
              </strong>{" "}
              towards active campaigns.
            </div>
        </div>
      </div>
    </section>
  );
}
