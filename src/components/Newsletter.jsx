"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: backend / service ( EmailJS) connect
    console.log("Subscribed email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-teal-400 to-teal-700 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <FaEnvelope className="text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-3">
          Stay Connected with ShareHope
        </h2>
        <p className="text-lg text-teal-100 mb-8">
          Get inspiring success stories, updates, and new campaigns delivered to
          your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-lg text-gray-900 border border-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg hover:scale-[1.05] transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-lg mt-4 text-white font-medium flex items-center justify-center gap-2">
            <MdCelebration size={28} color="yellow"/> Thank you for Subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
