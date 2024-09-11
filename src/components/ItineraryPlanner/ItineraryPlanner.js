import React from 'react'
import Navbar from '../Navbar/Navbar'
import SidebarNavigation from './SidebarNavigation'
import Header from './Header'
import ExploreSection from './ExploreSection'
import NotesSection from './NotesSection'
import PlacesToVisit from './PlacesToVisit'
import ItinerarySection from './ItinerarySection'
import BudgetSection from './BudgetSection'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItineraryPlanner = () => {
  return (
   <>
    <DndProvider backend={HTML5Backend}>
   <div className="flex">
      <SidebarNavigation />
      <div className="ml-1/5 w-full">
        <Header />
        <main className="p-6 space-y-6">
          <ExploreSection />
          <NotesSection />
          <PlacesToVisit />
          <ItinerarySection />
          <BudgetSection />
        </main>
      </div>
    </div>
    </DndProvider>
   </>
  )
}

export default ItineraryPlanner