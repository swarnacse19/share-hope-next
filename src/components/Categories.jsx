"use client";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaPaw, 
  FaBriefcase, 
  FaUsers, 
  FaHeart,
  FaHome, // New Icon for Family
  FaRunning, // New Icon for Sports
  FaPaintBrush, // New Icon for Creative
  FaCloudRain, // New Icon for Disaster/Flood
} from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io"; // New Icon for Community

// --- Data for all 10 Categories ---
const categoriesData = [
  // --- Existing 5 Categories ---
  {
    title: "Medical & Aid",
    description: "Supporting urgent healthcare costs, emergency relief, and essential supplies.",
    icon: GiHospitalCross,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Education",
    description: "Funding tuition fees, school supplies, research, and educational projects.",
    icon: FaGraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Animal Rescue",
    description: "Helping sanctuaries, funding veterinary care, and promoting animal welfare projects.",
    icon: FaPaw,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Business & Tech",
    description: "Raising capital for new startups, small business growth, and innovative projects.",
    icon: FaBriefcase,
    color: "text-green-700",
    bgColor: "bg-green-50",
  },
  {
    title: "Life Events",
    description: "Covering costs for weddings, honeymoons, adoption fees, and celebration funds.",
    icon: FaHeart,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },

  // --- 5 New Categories ---
  {
    title: "Disaster Relief",
    description: "Immediate support for victims of floods, fires, and natural disasters.",
    icon: FaCloudRain,
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
  {
    title: "Sports & Teams",
    description: "Sponsoring athletes, funding equipment, and supporting team travel costs.",
    icon: FaRunning,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Family Support",
    description: "Fundraising for family emergencies, adoptions, and memorial costs.",
    icon: FaHome,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    title: "Arts & Creative",
    description: "Supporting artists, independent films, creative projects, and cultural events.",
    icon: FaPaintBrush,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Community Projects",
    description: "Funding local initiatives, public improvements, and non-profit organization costs.",
    icon: IoIosPeople,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-28">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
          Fundraising Categories We Support
        </h2>
        
        {/* The grid is now set to display 5 columns on large screens to fit all 10 cards nicely in two rows */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          
          {categoriesData.map((category) => (
            <motion.div
              key={category.title} // Always use a unique key when mapping
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}
              className={`p-6 shadow-md rounded-xl text-center border border-gray-100 ${category.bgColor}`}
            >
              <category.icon 
                className={`mx-auto ${category.color} w-10 h-10 mb-4`} 
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Categories;