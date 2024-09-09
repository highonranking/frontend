import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Itinerary from "./components/Itinerary/Itinerary";
import LaunchAnnouncement from "./components/Announcement/Launch";
import PlanTrip from "./components/Itinerary/Itinerary";

function App() {
  return (
    <div className="App">
    <Hero/>
    <PlanTrip/>
    <LaunchAnnouncement/>
    </div>
  );
}

export default App;
