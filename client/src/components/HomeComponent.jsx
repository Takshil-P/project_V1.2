import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-blue-600 dark:bg-indigo-950 h-screen flex items-center justify-center text-white dark:text-teal-200">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 dark:opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-bounce">
          Unleash the Champion in You!
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white dark:text-gray-100">
          Schedule Your Table Tennis Tournaments with Ease and Excitement!
        </p>
        <button
          onClick={() => navigate("/sports-hub")}
          className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-teal-100 dark:bg-indigo-900 dark:text-teal-200 dark:hover:bg-teal-800 transition duration-300"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
