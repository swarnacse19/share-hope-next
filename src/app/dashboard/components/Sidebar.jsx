"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard" },
  { name: "My Profile", href: "/dashboard/myProfile" },
  { name: "My Campaigns", href: "/dashboard/myCampaigns" },
  { name: "Create Campaign", href: "/dashboard/createCampaign" },
  { name: "My Donations", href: "/dashboard/myDonations" },
];

function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col h-screen bg-white border-r border-gray-200 w-64 p-4">
      {/* --- Top Section --- */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 border-b border-gray-200">
          <Link href="/" className="text-2xl font-bold text-[#027874] italic">
            ShareHope
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#faf9e8] hover:text-[#04b1ac] rounded-lg transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      
      {status === "authenticated" && (
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src={session?.user?.image || "/avatar.jpg"}
              width={40}
              height={40}
              className="rounded-full border"
              alt="User Avatar"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {session?.user?.name || "User"}
              </p>
              <p className="text-xs text-gray-500">{session?.user?.email}</p>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition duration-300 bg-[#027874] text-white hover:bg-[#04b1ac]"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
