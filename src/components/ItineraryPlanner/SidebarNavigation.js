import React from "react";
import { FiHome, FiMapPin, FiCalendar, FiDollarSign } from "react-icons/fi";

const Sidebar = () => {
  // Scroll smoothly to the target section when clicked
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="w-64 sticky bg-[white] text-white h-screen flex-shrink-0 p-4">
      {/* Title */}
      <div className="font-semibold text-lg tracking-wider mb-6 text-[#0d0d0d]">
       Creating Trails
      </div>

      {/* Navigation */}
      <nav className="space-y-6">
        <ul className="space-y-2">
          {/* Overview Section */}
          <li
            onClick={() => scrollToSection("overview")}
            className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer transition duration-200"
          >
            <FiHome className="text-xl text-gray-800" />
            <span className="text-[#0d0d0d]">Overview</span>
          </li>

          {/* Explore Section */}
          <li
            onClick={() => scrollToSection("explore")}
            className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer transition duration-200"
          >
            <FiMapPin className="text-xl text-gray-800" />
            <span className="text-[#0d0d0d]">Explore</span>
          </li>

          {/* Itinerary Section */}
          <li
            onClick={() => scrollToSection("itinerary")}
            className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer transition duration-200"
          >
            <FiCalendar className="text-xl text-gray-800" />
            <span className="text-[#0d0d0d]">Itinerary</span>
          </li>

          {/* Budget Section */}
          <li
            onClick={() => scrollToSection("budget")}
            className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer transition duration-200"
          >
            <FiDollarSign className="text-xl text-gray-800" />
            <span className="text-[#0d0d0d]">Budget</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
