"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Component for Contact Info Cards
const ContactCard = ({ icon: Icon, title, content, link = "#" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="flex items-start p-6 bg-white shadow-lg rounded-xl transition duration-300 hover:shadow-xl hover:border-b-4 hover:border-teal-400 border-b-4 border-transparent h-full" // Added h-full
  >
    <div className="flex-shrink-0 p-3 rounded-full bg-teal-100 text-teal-600">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
      <a
        href={link}
        className="text-gray-600 hover:text-teal-500 transition-colors break-words" // Added break-words for long links/emails
      >
        {content}
      </a>
    </div>
  </motion.div>
);

function ContactUs() {
  const contactDetails = [
    {
      icon: FaPhone,
      title: "Call Us",
      content: "+880 123 456789",
      link: "tel:+880123456789",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "support@sharehope.com",
      link: "mailto:support@sharehope.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      content: "123 Main St, Dhaka, Bangladesh",
      // Note: This link is primarily for display on the card, the map is below
      link: "https://maps.app.goo.gl/", 
    },
  ];
  
  // Replace this with the actual embed code from Google Maps
  const googleMapsIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977826315!2d90.34217112838332!3d23.78077771741549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087029b85%3A0x5e08b0ae46b84b8e!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether you have a question about fundraising, need support, or want to give feedback, our team is ready to help.
          </motion.p>
        </div>

        {/* Contact Grid: Form (Left) & Details (Right) */}
        {/* Key for Equal Height: Use grid-cols-3 and flex-col, plus 'h-full' on children */}
        {/* Contact Grid: Form (Left) & Details (Right/Top) */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form - Spans 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 shadow-xl rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-teal-600 mb-6">Send Us a Message</h3>
            
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <div className="lg:col-span-1 space-y-8 flex flex-col">
            {contactDetails.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-16 pt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Find Us On The Map
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Google Maps Iframe */}
          <iframe 
            src={googleMapsIframeSrc}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}

export default ContactUs;