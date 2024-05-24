import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-name">GOLD STOP SHOES & REPAIR</div>
      <div className="navbar-tabs">
        <a href="#home">Home</a>
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
        <button>Get a Quote</button>
      </div>
    </div>
  );
}

export default Navbar;
