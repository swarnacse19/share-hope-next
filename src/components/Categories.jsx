"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaPaw, FaBriefcase, FaUsers, FaHeart } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";

function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-28">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
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
    </div>
  );
}

export default Categories;