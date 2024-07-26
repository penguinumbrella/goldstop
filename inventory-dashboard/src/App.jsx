import React, { useState } from 'react';
import './App.css';
import PlaceholderView from './components/placeholderView';
import SalesView from './components/sales/salesView';
import InventoryView from './components/inventory/InventoryView';
import DashboardView from './components/dashboard/dashboardView';
import SearchBar from './components/searchBar';
import LoginView from './components/loginView'; // Import your login component

function App() {
  // State to track the active view
  const [activeView, setActiveView] = useState('inventory'); // 'placeholder' is the default view
  const [loggedIn, setLoggedIn] = useState(true); // State for login status

  // Function to handle clicking on the icons
  const handleIconClick = (view) => {
    setActiveView(view); // Set the active view to the clicked view
  };

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true); // Set loggedIn to true upon successful login
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn to false upon logout
  };

  return (
    <div className="container">
      {/* Conditional rendering based on login status */}
      {!loggedIn ? (
        <LoginView onLogin={handleLogin} />
      ) : (
        <>
          <SearchBar onIconClick={handleIconClick} />
          {/* Render appropriate view based on activeView state */}
          {activeView === 'placeholder' ? <PlaceholderView /> : 
           activeView === 'dashboard' ? <DashboardView /> :
           activeView === 'inventory' ? <InventoryView /> :
           <SalesView />}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
