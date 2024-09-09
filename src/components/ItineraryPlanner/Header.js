import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Trip to Goa</h1>
      <div className="flex items-center space-x-3">
        <button className="p-2 bg-gray-200 rounded-md">Add trip dates</button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
};

export default Header;
