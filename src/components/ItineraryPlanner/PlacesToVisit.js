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
    <div ref={ref} className="bg-white p-2 shadow-md rounded-lg flex items-center">
      <img
        src={place.imageUrl || 'https://www.financialexpress.com/wp-content/uploads/2022/12/goa-1.jpg'}
        alt={place.title}
        className="w-10 h-10 mr-2 rounded-full"
      />
      <p>{place.title}</p>
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
    <div ref={drop} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">{category}</h3>
      <div className="space-y-2">
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
    { title: "Baga Beach", category: "Beach", imageUrl: "https://via.placeholder.com/100" },
    { title: "Calangute Beach", category: "Beach", imageUrl: "https://via.placeholder.com/100" },
    { title: "Tito's Club", category: "Food", imageUrl: "" },
  ];

  const [places, setPlaces] = useState(defaultPlaces);
  const [categories, setCategories] = useState(["Beach", "Food"]);

  // Add new place to default category
  const addPlace = (title, category) => {
    setPlaces([...places, { title, category, imageUrl: '' }]);
  };

  // Add new category
  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  // Move place between categories
  const movePlace = (index, newCategory) => {
    const updatedPlaces = [...places];
    updatedPlaces[index].category = newCategory;
    setPlaces(updatedPlaces);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Places to Visit</h2>

      {/* Input to add places */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Add a place"
          className="border p-2 rounded-md"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              addPlace(e.target.value, "Beach");
              e.target.value = "";
            }
          }}
        />
        <button onClick={() => addCategory("New Category")} className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center">
          <FiPlus className="mr-2" /> Add Category
        </button>
      </div>

      {/* Categories with draggable places */}
      <div className="space-y-4">
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
