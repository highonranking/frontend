import React from "react";
import { FiCalendar, FiPlus } from "react-icons/fi";

const TripOverview = () => {
  return (
    <div  id="overview" className="relative  bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      {/* Full background image */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: 'url(https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg)' }}>
        
        {/* Title above the image */}
        <div className="absolute top-4 left-4">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">Trip to Goa</h1>
        </div>

        {/* Add trip dates button at the bottom-left */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <button className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-opacity-80">
            <FiCalendar className="text-xl" />
            <span className="text-sm">Add Trip Dates</span>
          </button>
        </div>

        {/* User image and add travelers button at the bottom-right */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          {/* User Image */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
          />
          {/* Add travelers button */}
          <button className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600">
            <FiPlus className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripOverview;
