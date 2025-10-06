"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    const router = useRouter();
    const session = useSession();

  const handleSocialLogin = () => {
    signIn("google");
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("Successfully Logged IN");
    }
  }, [session?.status]);

  return (
    <div>
      <button onClick={handleSocialLogin}
        className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out cursor-pointer"
        // Add your Google Sign-In logic here
      >
        <FcGoogle className="h-6 w-6 mr-3" />
        Sign in with Google
      </button>
    </div>
  );
}
