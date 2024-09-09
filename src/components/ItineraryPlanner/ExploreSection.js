import React from 'react';

const ExploreSection = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Explore</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-3 shadow-md rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Place" />
          <h3 className="font-semibold mt-2">Top places for Goa</h3>
        </div>
        <div className="bg-white p-3 shadow-md rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Place" />
          <h3 className="font-semibold mt-2">Best restaurants in Goa</h3>
        </div>
        <div className="bg-white p-3 shadow-md rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Place" />
          <h3 className="font-semibold mt-2">Search hotels with transparent pricing</h3>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
