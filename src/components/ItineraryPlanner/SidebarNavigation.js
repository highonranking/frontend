import React from 'react';

const SidebarNavigation = () => {
  return (
    <aside className="w-1/5 bg-gray-100 p-4 fixed h-screen">
      <ul>
        <li className="text-lg font-semibold">Overview</li>
        <li>Explore</li>
        <li>Itinerary</li>
        <li>Budget</li>
      </ul>
    </aside>
  );
};

export default SidebarNavigation;
