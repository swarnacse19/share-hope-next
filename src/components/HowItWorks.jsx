"use client";
import { FaEdit, FaShareAlt, FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FaEdit,
    title: "1. Create Your Campaign",
    description: "Tell your story clearly, set a funding goal, and upload compelling photos or videos. It takes just minutes to launch.",
  },
  {
    icon: FaShareAlt,
    title: "2. Share Your Story",
    description: "Spread the word! Share your campaign link with friends, family, and on social media to build momentum.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "3. Receive & Withdraw",
    description: "Collect donations securely. Once your goal is reached (or anytime), withdraw the funds directly to your bank account.",
  },
];

function HowItWorks() {
  return (
    // The parent element needs id="how-it-works" when called in your Home Page
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            It's Simple to Fundraise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get the help you need in three simple, secure steps. We handle the technology, you focus on your cause.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="relative p-8 bg-white rounded-xl shadow-xl border-t-4 border-teal-500 text-center flex flex-col items-center"
            >
              {/* Icon */}
              <div className="p-4 mb-4 rounded-full bg-teal-500 text-white shadow-lg">
                <step.icon className="w-8 h-8" />
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 flex-grow">{step.description}</p>
              
              {/* Decorative Numbering */}
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-teal-200 text-teal-800 font-extrabold text-sm rounded-full shadow-md">
                Step {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;