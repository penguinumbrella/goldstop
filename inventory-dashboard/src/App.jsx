// App.js
import React, { useState } from 'react';
import './App.css';
import PlaceholderView from './components/placeholderView';
import SalesView from './components/sales/salesView';
import InventoryView from './components/inventory/inventoryView';
import DashboardView from './components/dashboard/dashboardView';
import SearchBar from './components/searchBar';
function App() {
  // State to track the active view
  const [activeView, setActiveView] = useState('placeholder'); // 'map' is the default view

  // Function to handle clicking on the icons
  const handleIconClick = (view) => {
    setActiveView(view); // Set the active view to the clicked view
  };

  return (
    <div className="container">
      <SearchBar onIconClick={handleIconClick} />
      {/* Render appropriate view based on activeView state */}
      {activeView === 'placedholder' ? <PlaceholderView /> : 
       activeView === 'dashboard' ? <DashboardView /> :
       activeView === 'inventory' ? <InventoryView/> :
       <SalesView />}
    </div>
  );
}

export default App;
