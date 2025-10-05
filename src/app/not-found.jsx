
import React from 'react';
import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      
      <p className="text-9xl font-extrabold text-indigo-600 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for does not exist.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/" passHref>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}