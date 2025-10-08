"use client";
import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const stories = [
  {
    quote: "With ShareHope, we raised 100% of the funds needed for my sister's emergency surgery in just 48 hours. This platform truly saved her life by allowing us to focus on her health, not the bills.",
    cause: "Medical Emergency",
    raised: "$25,000",
    image: "https://media.istockphoto.com/id/1194700898/photo/asian-senior-woman-sitting-on-the-wheelchair-with-her-son-happy-smile-face-on-the-green-park.jpg?s=612x612&w=0&k=20&c=YvClNmkxbWlYGFpOyqxq3GxNBbPFCq8VXhkX1xtvEQo=",
  },
  {
    quote: "We launched our small business idea and the community response was overwhelming. This platform turned our concept into reality. We were able to purchase necessary equipment and hire our first employee!",
    cause: "Business Launch",
    raised: "$12,000",
    image: "https://thumbs.dreamstime.com/b/business-woman-working-laptop-computer-office-63543303.jpg",
  },
  {
    quote: "The Animal Rescue Fund hit its goal thanks to donors worldwide. We rescued 30 stray animals this month, providing them with essential care and finding them forever homes.",
    cause: "Animal Welfare",
    raised: "$8,500",
    image: "https://www.aspcapro.org/sites/default/files/styles/image_component/public/2024-01/volunteer-with-shepherd-dog.jpg.webp?itok=ohOWmDyJ",
  },
];

const story = [
  {
    quote: "After the storm, ShareHope donors helped us rebuild our home from the ground up. This platform gave us a fresh start and hope for the future.",
    cause: "Home Reconstruction",
    raised: "$40,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgg12iJ6BdYwzV8H_AQLUBA9M9ZT4PzNfJg&s",
  },
  {
    quote:
      "Our wedding dream came true! We received timely help that covered essential expenses, ensuring a beautiful, stress-free start to our life together.",
    cause: "Wedding Help",
    raised: "$7,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstG2OZaXw71VRCOvir7RrFy_AFclV3GbZUg&s",
  },
]

const StoryCard = ({ story, index }) => (
  <motion.div
    key={index} data-aos="fade-right"
    className="bg-teal-50 shadow-xl p-6 rounded-xl overflow-hidden flex flex-col w-[85vw] sm:w-[350px] mr-6 flex-shrink-0 group"
  >
    {/* Image */}
    <div className="h-48 w-full mb-4 rounded-lg overflow-hidden flex-shrink-0">
      <img
        src={story.image}
        alt={story.cause}
        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x250/CCCCCC/333333?text=Story+Image";
        }}
      />
    </div>

    <div className="flex-grow min-h-0 overflow-hidden pr-2 relative">
      <FaQuoteLeft className="w-6 h-6 text-teal-500 mb-3 flex-shrink-0" />
      <div className="text-gray-700 italic text-base leading-relaxed">
        "{story.quote}"
      </div>
    </div>

    {/* Footer */}
    <div className="pt-4 border-t border-gray-200 flex-shrink-0">
      <p className="text-sm font-semibold text-gray-800">
        Cause: <span className="text-teal-600">{story.cause}</span>
      </p>
      <p className="text-sm font-semibold text-gray-800">
        Raised: <span className="text-green-600">{story.raised}</span>
      </p>
    </div>

  </motion.div>
);

function SuccessStories() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='bg-white'>
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-16">
          <FaCheckCircle className="w-10 h-10 text-teal-500 mx-auto mb-3" />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Inspiring Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how real people are using ShareHope to change lives and achieve their goals.
          </p>
        </div>

      <div className='flex flex-col justify-center gap-4'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 max-w-6xl mx-auto'>
          {stories.map((story, index) => (
          <StoryCard key={index} story={story} index={index} />
        ))}
        </div>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 max-w-4xl mx-auto'>
          {story.map((story, index) => (
          <StoryCard key={index} story={story} index={index} />
        ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default SuccessStories;