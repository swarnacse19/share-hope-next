"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaPaw, FaBriefcase, FaUsers, FaHeart } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";

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
      <section className="py-16 px-6">
        <h2 className="text-3xl font-extrabold text-center text-teal-700 mb-12">
          Fundraising Categories We Support
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          
          {/* Medical & Emergency */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="p-6 shadow-md rounded-xl text-center border border-gray-100 bg-white"
          >
            <GiHospitalCross className="mx-auto text-red-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Medical & Aid</h3>
            <p className="text-gray-600 text-sm">
              Supporting urgent healthcare costs, emergency relief, and essential supplies.
            </p>
          </motion.div>
          
          {/* Education */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="p-6 shadow-md rounded-xl text-center border border-gray-100 bg-white"
          >
            <FaGraduationCap className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
            <p className="text-gray-600 text-sm">
              Funding tuition fees, school supplies, research, and educational projects.
            </p>
          </motion.div>

          {/* Animal Welfare */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="p-6 shadow-md rounded-xl text-center border border-gray-100 bg-white"
          >
            <FaPaw className="mx-auto text-amber-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Animal Rescue</h3>
            <p className="text-gray-600 text-sm">
              Helping sanctuaries, funding veterinary care, and promoting animal welfare projects.
            </p>
          </motion.div>

          {/* Business & Innovation */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="p-6 shadow-md rounded-xl text-center border border-gray-100 bg-white"
          >
            <FaBriefcase className="mx-auto text-green-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Business & Tech</h3>
            <p className="text-gray-600 text-sm">
              Raising capital for new startups, small business growth, and innovative projects.
            </p>
          </motion.div>
          
          {/* Weddings & Celebrations */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
            className="p-6 shadow-md rounded-xl text-center border border-gray-100 bg-white"
          >
            <FaHeart className="mx-auto text-pink-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Life Events</h3>
            <p className="text-gray-600 text-sm">
              Covering costs for weddings, honeymoons, adoption fees, and celebration funds.
            </p>
          </motion.div>
        </div>
      </section>
      
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