"use client";
import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion";

const stories = [
  {
    quote: "With ShareHope, we raised 100% of the funds needed for my sister's emergency surgery in just 48 hours. The support was incredible.",
    cause: "Medical Emergency",
    raised: "$25,000",
    image: "https://media.istockphoto.com/id/1194700898/photo/asian-senior-woman-sitting-on-the-wheelchair-with-her-son-happy-smile-face-on-the-green-park.jpg?s=612x612&w=0&k=20&c=YvClNmkxbWlYGFpOyqxq3GxNBbPFCq8VXhkX1xtvEQo=", 
  },
  {
    quote: "We launched our small business idea and the community response was overwhelming. This platform turned our concept into reality.",
    cause: "Business Launch",
    raised: "$12,000",
    image: "https://thumbs.dreamstime.com/b/business-woman-working-laptop-computer-office-63543303.jpg", 
  },
  {
    quote: "The Animal Rescue Fund hit its goal thanks to donors worldwide. We rescued 30 stray animals this month!",
    cause: "Animal Welfare",
    raised: "$8,500",
    image: "https://www.aspcapro.org/sites/default/files/styles/image_component/public/2024-01/volunteer-with-shepherd-dog.jpg.webp?itok=ohOWmDyJ", 
  },
];

function SuccessStories() {
  return (
    // The parent element needs id="success-stories" when called in your Home Page
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <FaCheckCircle className="w-10 h-10 text-teal-500 mx-auto mb-3" />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Inspiring Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how real people are using ShareHope to change lives and achieve their goals.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 p-6 rounded-xl shadow-xl overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src={story.image}
                  alt={story.cause}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Quote */}
              <div className="flex-grow">
                <FaQuoteLeft className="w-6 h-6 text-teal-500 mb-3" />
                <p className="italic text-gray-700 mb-4 text-base">
                  "{story.quote}"
                </p>
              </div>

              {/* Footer Details */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-800">
                  Cause: <span className="text-teal-600">{story.cause}</span>
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Raised: <span className="text-green-600">{story.raised}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;