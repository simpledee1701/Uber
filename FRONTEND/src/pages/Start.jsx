import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/start.png')" }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Logo Section */}
        <header className="p-6">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-12 sm:h-14 md:h-16 lg:h-20 transition-all duration-300"
          />
        </header>

        {/* Bottom Container */}
        <section className="bg-white rounded-t-3xl shadow-xl px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
          <h2 className="text-gray-800 font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Get Started
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8">
            Experience the fastest and most reliable ride service.
          </p>

          {/* Continue Button */}
          <Link
            to="/login"
            className="
              block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg sm:text-xl py-3.5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out
            "
          >
            Continue
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Start;
