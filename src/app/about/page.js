"use client";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 px-6 text-center text-teal-700">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Your Platform for Every Cause
        </motion.h1>
        <p className="text-xl max-w-4xl mx-auto text-gray-600">
          We are a global crowdfunding platform dedicated to empowering individuals and communities to raise funds for life's milestones and needs, from personal emergencies and education to animal rescue and innovative business ventures.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-teal-500"
        >
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To make fundraising easy, safe, and accessible for everyone, regardless of their cause. We aim to connect compassionate donors with impactful campaigns, fostering a global community of support for all types of goals and emergencies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-teal-500"
        >
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where a lack of funds never prevents a good idea from launching, a community from thriving, or an emergency need from being met. Our goal is to be the most trusted and efficient platform for turning generosity into real-world action.
          </p>
        </motion.div>
      </section>

      {/* Features / Impact (New Categories) */}
      
      {/* Community/Users Section - Reused from original but updated tone */}
      <section className="py-16 px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto">
            <FaUsers className="mx-auto text-teal-500 w-12 h-12 mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Join a Global Community</h3>
            <p className="text-lg text-gray-600">
                Beyond funding, our platform is about community. We empower users worldwide to share their stories, connect with supporters, and build a network of generosity, no matter the cause.
            </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;