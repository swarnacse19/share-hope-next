"use client";

import Link from "next/link";

const causes = [
  // Left side - arranged in a semi-circle
  { name: "Medical", image: "https://img.freepik.com/free-photo/front-view-doctor-holding-medical-element_23-2148854104.jpg", position: "top-1/10 left-1/5 -translate-x-1/2 -translate-y-1/2" }, // Top-left
  { name: "Animal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZbaQ4hB5EVsQkFULPcGwWRVh7-w9ddNvng&s", position: "top-1/2 left-1/8 -translate-x-1/2 -translate-y-1/2" }, // Mid-left, further out
  { name: "Emergency", image: "https://i.ibb.co.com/3yJNnjbp/p5.webp", position: "bottom-1/10 left-1/5 -translate-x-1/2 translate-y-1/2" }, // Bottom-left

  // Right side - arranged in a semi-circle
  { name: "Education", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_39wvCQcop8ePVG2tBkltEo60TKbM3ZqB3A&s", position: "top-1/10 right-1/5 translate-x-1/2 -translate-y-1/2" }, // Top-right
  { name: "Business", image: "https://thumbs.dreamstime.com/b/business-large-group-partnership-briefing-paperwork-corporate-discussing-office-men-suit-172489995.jpg", position: "top-1/2 right-1/8 translate-x-1/2 -translate-y-1/2" }, // Mid-right, further out
  { name: "Community", image: "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?cs=srgb&dl=pexels-leah-newhouse-50725-325521.jpg&fm=jpg", position: "bottom-1/10 right-1/5 translate-x-1/2 translate-y-1/2" }, // Bottom-right
];

function Banner() {
  return (
    <section className="py-24 md:py-32 bg-[#faf9e8] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {causes.map((cause, index) => (
          <div
            key={index}
            className={`hidden lg:block absolute ${cause.position} transition-transform duration-700 hover:scale-105`}
          >
            <div className="relative w-36 h-36">

              <div className="absolute inset-0 border-[6px] border-[#03847f] rounded-full animate-pulse-slow"></div>

              <img
                src={cause.image}
                alt={cause.name}
                className="w-full h-full object-cover rounded-full p-1"
              />

              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white rounded-full text-xs font-semibold text-gray-700 shadow-lg whitespace-nowrap">
                {cause.name}
              </div>
            </div>
          </div>
        ))}

        <div className="relative max-w-2xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Together, We Light the Path of Hope.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Your small donation can change many lives. Start your journey of giving today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/donate"
              className="px-10 py-3 rounded-full bg-[#027874] hover:bg-[#04b1ac] text-white font-bold text-lg transition duration-300 transform hover:scale-105 shadow-xl shadow-[#027874]/40 uppercase tracking-wider"
            >
              Donate Now
            </Link>

            <Link
              href="/addCampaigns"
              className="px-10 py-3 rounded-full border-2 border-[#027874] text-[#027874] font-bold text-lg transition duration-300 hover:bg-[#027874] hover:text-white uppercase tracking-wider"
            >
              Start Campaign
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;