import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDrag, useDrop } from 'react-dnd';

// Draggable Place Card
const PlaceCard = ({ place, index, movePlace }) => {
  const [, ref] = useDrag({
    type: "PLACE",
    item: { index },
  });

  return (
    <div 
      ref={ref} 
      className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center transition-transform hover:scale-105 transform-gpu duration-300 max-w-"
    >
      <img
        src={place.imageUrl || 'https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg'}
        alt={place.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <p className="mt-3 text-base text-center font-semibold">{place.title}</p>
    </div>
  );
};

// Category Component with Drop functionality
const Category = ({ category, places, movePlace }) => {
  const [, drop] = useDrop({
    accept: "PLACE",
    drop: (item) => movePlace(item.index, category),
  });

  return (
    <div ref={drop} className="bg-gray-100 p-2 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4">{category}</h3>
      <div className="flex flex-wrap gap-4">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} index={index} movePlace={movePlace} />
        ))}
      </div>
    </div>
  );
};

// Main Component
const PlacesToVisit = () => {
  const defaultPlaces = [
    { title: "Baga Beach", category: "Beach", imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg" },
    { title: "Calangute Beach", category: "Beach", imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg" },
    { title: "Tito's Club", category: "Food", imageUrl: "https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg" },
  ];

  const [places, setPlaces] = useState(defaultPlaces);
  const [categories, setCategories] = useState(["Beach", "Food"]);
  const [newCategoryTitle, setNewCategoryTitle] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  // Add new place to a specific category
  const addPlace = (title, category) => {
    if (title && category) {
      setPlaces([...places, { title, category, imageUrl: '' }]);
    }
  };

  // Add new category with title input
  const addCategory = () => {
    if (newCategoryTitle) {
      setCategories([...categories, newCategoryTitle]);
      setNewCategoryTitle("");
    }
  };

  // Move place between categories
  const movePlace = (index, newCategory) => {
    const updatedPlaces = [...places];
    updatedPlaces[index].category = newCategory;
    setPlaces(updatedPlaces);
  };

  return (
    <section className="p-2  mx-auto">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Places to Visit</h2>

      {/* Category Input */}
      <div className="mb-6">
        <div className="flex space-x-3 items-center">
          <input
            type="text"
            placeholder="New category title"
            value={newCategoryTitle}
            onChange={(e) => setNewCategoryTitle(e.target.value)}
            className="border p-3 rounded-lg flex-grow text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button
            onClick={addCategory}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg flex items-center transition duration-200 shadow-md"
          >
            <FiPlus className="mr-2" /> Add Category
          </button>
        </div>
      </div>

      {/* Place Input */}
      <div className="mb-8">
        <div className="flex space-x-3 items-center">
          <input
            type="text"
            placeholder="Add a place"
            className="border p-3 rounded-lg flex-grow text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value && selectedCategory) {
                addPlace(e.target.value, selectedCategory);
                e.target.value = "";
              }
            }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option value="">Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Categories with draggable places */}
      <div className="space-y-6">
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            places={places.filter((place) => place.category === category)}
            movePlace={movePlace}
          />
        ))}
      </div>
    </section>
  );
};

export default PlacesToVisit;
