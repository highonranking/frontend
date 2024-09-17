import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LaunchAnnouncement from "./components/Announcement/Launch";
import Itinerary from "./components/Itinerary/Itinerary";
import ItineraryPlanner from "./components/ItineraryPlanner/ItineraryPlanner";

function App() {
  return (
    <Router>
       {/* Navbar persists across all routes */}
      <Routes>
        {/* "/" route contains the Hero, PlanTrip, LaunchAnnouncement, and Itinerary components */}
        <Route
          path="/"
          element={
            <>
             <Navbar />
              <Hero />
              <Itinerary />
              <LaunchAnnouncement />

            </>
          }
        />
        
        {/* "/itinerary-planner" route specifically for ItineraryPlanner */}
        <Route path="/itinerary-planner" element={<ItineraryPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
