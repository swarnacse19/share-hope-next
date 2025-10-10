"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function ConditionalSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:block fixed w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div
        className={`fixed inset-0 z-50 bg-opacity-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* 🔹 Sidebar Component */}
          <div className="h-[calc(100vh-56px)] overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-sm z-40 flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-700 hover:text-teal-600"
        >
          <FaBars size={20} />
        </button>
        <h1 className="text-lg font-semibold text-teal-700">Dashboard</h1>
      </div>
    </div>
  );
}
