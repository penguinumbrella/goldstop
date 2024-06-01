import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Location from './components/home/location/Location';
import Services from './components/home/services/Services';
import ServicesView from './components/servicesView/servicesView';
import ProductsView from './components/products/productsView';
import HomeView from './components/home/homeView';

function App() {

  const [activeView, setActiveView] = useState('home'); // 'map' is the default view


  // Function to handle clicking on the icons
  const handleTabClick = (view) => {

    setActiveView(view); // Set the active view to the clicked view
  };
  

  return (
    <div className="container">
      <Navbar onTabClick={handleTabClick}/>
      {activeView === 'home' ? <HomeView onTabClick={handleTabClick}/> : 
      activeView === 'services' ? <ServicesView onTabClick={handleTabClick}/> :
       <ProductsView/>}
      
    </div>
  );
}

export default App;
