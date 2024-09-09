import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const PlanTrip = () => {
  const [tripData, setTripData] = useState({
    location: "",
    startDate: "",
    endDate: "",
    numberOfPeople: 1,
    budget: "",
  });

  const [mapCenter, setMapCenter] = useState({ lat: 15.25, lng: 73.43 });
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });

    if (name === "location") {
      // Call API to get coordinates based on location name
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { lat, lng } = data.results[0].geometry.location;
          setMapCenter({ lat, lng });
          setMarkers([{ lat, lng }]);
        })
        .catch((error) => console.error("Error fetching location:", error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Data:", tripData);
    // Handle further logic for planning the trip (API calls, etc.)
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="bg-[#000003] min-h-screen flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-start justify-center w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2 justify-center my-auto text-white bg-transparent border border-[#1a1a1d] rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-center tracking-wider text-indigo-400">
            Plan a New Trip
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Location Input */}
            <div className="mb-6">
              <label className="block mb-2 text-lg font-medium text-gray-300">
                Where to?
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Agra, Puducherry, Goa 🍻"
                value={tripData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2c2c2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Date Inputs */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-6">
              <div className="w-full md:w-1/2">
                <label className="block mb-2 text-lg font-medium text-gray-300">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={tripData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2c2c2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-2 text-lg font-medium text-gray-300">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={tripData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2c2c2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Number of People */}
            <div className="mb-6">
              <label className="block mb-2 text-lg font-medium text-gray-300">
                Number of People
              </label>
              <input
                type="number"
                name="numberOfPeople"
                min="1"
                value={tripData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2c2c2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Budget */}
            <div className="mb-8">
              <label className="block mb-2 text-lg font-medium text-gray-300">
                Approx Budget (INR)
              </label>
              <input
                type="number"
                name="budget"
                placeholder="e.g. 1000"
                value={tripData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2c2c2f] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-center font-semibold text-lg tracking-wide focus:outline-none"
            >
              Start Planning
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 h-64 md:h-screen bg-[#000003] rounded-lg shadow-lg">
          <GoogleMap
            center={mapCenter}
            zoom={12}
            options={{
              fullscreenControl: false,
              zoomControl: false,
            }}
            mapContainerClassName="w-full h-full rounded-lg"
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
