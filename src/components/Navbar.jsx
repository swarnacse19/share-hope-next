"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  // console.log(session, status);

  const navLinks = (
    <>
      <Link href="/" className="hover:text-[#04b1ac] transition duration-200">
        Home
      </Link>
      <Link
        href="/allCampaigns"
        className="hover:text-[#04b1ac] transition duration-200"
      >
        All Campaigns
      </Link>
      {/* <Link
        href="/#how-it-works"
        className="hover:text-[#04b1ac] transition duration-200"
      >
        How It Works
      </Link> */}
      <Link
        href="/#success-stories"
        className="hover:text-[#04b1ac] transition duration-200"
      >
        Success Stories
      </Link>
      <Link
        href="/about"
        className="hover:text-[#04b1ac] transition duration-200"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="hover:text-[#04b1ac] transition duration-200"
      >
        Contact Us
      </Link>
    </>
  );

  // const userDropdown = (
  //   <div className="dropdown dropdown-end">

  //     <div
  //       tabIndex={0}
  //       role="button"
  //       className="btn btn-ghost btn-circle avatar border-2 border-gray-200 hover:border-[#04b1ac] transition duration-200"
  //     >
  //       {/* Placeholder for user avatar / icon */}
  //       <div className="w-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-700">

  //           U
  //       </div>
  //     </div>

  //     <ul
  //       tabIndex={0}
  //       className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-10 mt-3 w-52 p-2 shadow-xl border border-gray-100"
  //     >
  //       <li><Link href="/myProfile">My Profile</Link></li>
  //       <li><Link href="/myCampaigns">My Campaigns</Link></li>
  //       <li><Link href="/addCampaigns">Add Campaign</Link></li>
  //       <li><Link href="/myTransactions">My Transactions</Link></li>
  //       <li className="mt-2">
  //         {/* Logout Button */}
  //         <button className="btn bg-[#027874] text-white hover:bg-[#04b1ac] transition duration-300 w-full justify-center">
  //           Logout
  //         </button>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <nav className="fixed bg-[#faf9e8] top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-3xl font-medium text-[#027874] italic">
              <Link href="/">ShareHope</Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-6 text-[15px] font-medium text-gray-700">
                {navLinks}
              </div>

              {/* Login/User Button */}
              {status == "authenticated" ? (
                <>
                  <Link
                    href="/dashboard"
                    className="hover:text-[#04b1ac] transition duration-200"
                  >
                    Dashboard
                  </Link>
                  <img
                    src={session?.user?.image || "/avatar.jpg"}
                    width={40}
                    height={40}
                    className="rounded-[50%] border"
                    alt="user-logo"
                  />
                  <button
                    className="px-7 py-2 rounded-md transform transition hover:scale-[1.05] duration-300 bg-[#04b1ac] hover:bg-[#027874] font-semibold shadow-md cursor-pointer text-white"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="px-7 py-2 rounded-md transform transition hover:scale-[1.05] duration-300 bg-[#04b1ac] hover:bg-[#027874] font-semibold shadow-md cursor-pointer text-white"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#04b1ac] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04b1ac]"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* (Toggled by state) */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-inner px-4 pt-2 pb-4 space-y-3 border-t border-gray-100 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3 text-gray-700 font-medium">
              {navLinks}
            </div>

            <hr className="my-2 border-gray-100" />

            {/* Login for mobile */}
            {status == "authenticated" ? (
              <>
                <img
                  src={session?.user?.image || "/avatar.jpg"}
                  width={40}
                  height={40}
                  className="rounded-[50%] border"
                  alt="user-logo"
                />
                <button
                  className="px-7 py-2 rounded-md transform transition hover:scale-[1.05] duration-300 bg-[#04b1ac] hover:bg-[#027874] font-semibold shadow-md cursor-pointer text-white"
                  onClick={() => signOut()}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="px-7 py-2 rounded-md transform transition hover:scale-[1.05] duration-300 bg-[#04b1ac] hover:bg-[#027874] font-semibold shadow-md cursor-pointer text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
      {/* <div className="h-16"></div> */}
    </div>
  );
}

export default Navbar;
