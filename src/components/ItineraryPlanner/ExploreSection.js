import React from "react";

const ExploreSection = () => {
  const places = [
    {
      title: "Top places for Goa",
      description: "Most often seen on the web",
      imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-2.jpg"
    },
    {
      title: "Best restaurants in Goa",
      description: "Most often seen on the web",
      imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-3.jpg"
    },
    {
      title: "Search hotels with transparent pricing",
      description: "No commission charges",
      imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg"
    }
  ];

  return (
    <div id="explore" className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore</h2>
      
      {/* Responsive grid for the places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-200"
          >
            {/* Image */}
            <img
              src={place.imageUrl}
              alt={place.title}
              className="w-full h-40 object-cover"
            />
            
            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {place.title}
              </h3>
              <p className="text-gray-600">{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Browse All button */}
      <div className="mt-6 text-center">
        <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition duration-200">
          Browse all
        </button>
      </div>
    </div>
  );
};

export default ExploreSection;
