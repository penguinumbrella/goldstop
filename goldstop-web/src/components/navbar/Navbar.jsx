import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ onTabClick }) => {

  const [activeTab, setActiveTab] = useState(null); // State to keep track of the active icon

  const handleTabClick = (view, event) => {
    console.log("Tab clicked", view);
    // Additional logic can be added here
    onTabClick(view);
    const tabRect = event.target.getBoundingClientRect();
    console.log(tabRect);
    setActiveTab(view); // Update the active tab
  };

  const isTabActive = (tab) => activeTab === tab; // Function to check if the icon is active

  return (
    <div className="navbar">
      <div className="navbar-name">GOLD STOP SHOES & REPAIR</div>
      <div className="navbar-tabs">
        <a href="#home" onClick={(event) => handleTabClick('home', event)}>Home</a>
        <a href="#services" onClick={(event) => handleTabClick('services', event)}>Services</a>
      </div>
      <div className="navbar-social">
        <a href="https://www.facebook.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="navbar-quote">
        <a href="mailto:goldstoprepair.com" className="quote-button">Get a Quote</a>
      </div>
    </div>
  );
}

export default Navbar;
