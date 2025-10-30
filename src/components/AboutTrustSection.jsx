"use client";
import React from "react";
import { FaShieldAlt, FaUsers } from "react-icons/fa";

const AboutTrustSection = () => {
  return (
    <section className="py-10 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-gray-700 max-w-5xl italic mx-auto text-sm md:text-lg lg:text-xl font-medium">
          "Millions of people around the world rely on our platform to raise funds
          for meaningful causes quickly, transparently, and securely. Every donation is tracked and delivered directly to verified campaigns.
            Real-time updates ensure complete transparency and accountability. With countless successful campaigns, donors and fundraisers trust
            our platform for security, efficiency, and maximum impact."
        </p>
      </div>
    </section>
  );
};

export default AboutTrustSection;
