"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({children}) {
    const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");
  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <Toaster></Toaster>
      <main
        className={`mx-auto min-h-screen ${
          isDashboardRoute ? "pt-0" : "pt-[72px]"
        }`}
      >
        {children}
      </main>
      {!isDashboardRoute && <Footer />}
    </>
  );
}
