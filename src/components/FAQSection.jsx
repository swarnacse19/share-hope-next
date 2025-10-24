"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "Where exactly are the funds we raise utilized?",
    answer:
      "Your donation is channeled directly to the specific campaign or chosen organization. Every campaign operates with a transparent budget and clear objectives. A full financial report is published on the website upon the campaign's completion.",
  },
  {
    question: "How can I start a new fundraising campaign?",
    answer:
      "Click on the 'Start Campaign' button in the navigation bar. You will be prompted to fill out a detailed form outlining your goal, required funding, and objectives. Our team will review the proposal before setting the campaign live.",
  },
  {
    question: "Are donations eligible for tax deduction?",
    answer:
      "Yes. All donations made through the ShareHope platform are eligible for tax deduction according to applicable government laws. You will receive an official tax receipt immediately after making a donation.",
  },
  {
    question: "Does ShareHope charge any fees?",
    answer:
      "ShareHope takes a minimal platform fee (typically 2–5%), which is used to cover platform maintenance, security, and transaction costs. The exact fee rate will be displayed when you create your campaign.",
  },
  {
    question: "How can I track the progress of a campaign?",
    answer:
      "Each campaign has its own page featuring a live progress bar and regular updates posted by the organizer. You can also sign up to receive important updates via email.",
  },
];

const AccordionItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div
      className={`border border-gray-100 rounded-2xl shadow-sm mb-4 overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-[#f8fffd]" : "bg-white"
      }`}
    >
      <button
        className="flex justify-between items-center w-full px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:text-[#027874] transition-colors duration-300"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDownIcon
          className={`w-6 h-6 cursor-pointer flex-shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#027874]" : "rotate-0 text-gray-400"
          }`}
        />
      </button>

      <div
        className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-28 bg-white" id="faq">
      <div className="absolute inset-0 opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Your <span className="text-[#027874]">Questions</span> Answered
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Find clarity on how ShareHope works, from donations to campaign management.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-10 border-t border-gray-200">
          <p className="text-lg text-gray-600 mb-6">
            Can't find the answer you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-[#027874] hover:bg-[#04b1ac] transition-transform transform hover:scale-105 shadow-md"
          >
            Contact Our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
