import React from 'react';

const LaunchAnnouncement = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#000521] text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#000521] to-[#003366] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          We're Launching Soon!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Get ready for an exciting new way to manage your travel plans. Our app is coming by the end of the year.
        </p>
        <button className="bg-transparent text-white border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#FFFFFF] hover:text-[#003366] transition duration-300">
          Stay Updated
        </button>
      </div>

      {/* Optional: Add some stylish animations or illustrations */}
      <div className="absolute bottom-0 left-0 w-full pb-12 flex justify-center">
        <img src='assets/logo.png'/>
      </div>

    </div>
  );
};

export default LaunchAnnouncement;
