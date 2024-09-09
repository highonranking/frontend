import React from 'react';

const PlacesToVisit = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Places to visit</h2>
      <div className="flex space-x-4">
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Place" />
          <p className="mt-2">Baga Beach</p>
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img src="https://via.placeholder.com/100" alt="Place" />
          <p className="mt-2">Calangute Beach</p>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;
