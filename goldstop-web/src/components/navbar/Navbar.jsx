import React from 'react';
import { useState } from 'react';
import { ChakraProvider, IconButton } from '@chakra-ui/react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo-top.svg';
import './navbar.css';

const Navbar = ({ onTabClick }) => {

  const [activeTab, setActiveTab] = useState(null);

  const handleMailToClick = () => {
    window.location.href = 'mailto:goldstoprepair@gmail.com';
  };

  const handleTabClick = (view, event) => {
    console.log("Tab clicked", view);
    onTabClick(view);
    setActiveTab(view);
  };

  const isTabActive = (tab) => activeTab === tab;

  return (
    <ChakraProvider>
      <div className="navbar">
        <div className="navbar-social">
          <a href="https://www.facebook.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size="2em" />
          </a>
          <a href="https://www.instagram.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="2em" />
          </a>
        </div>
        <div className="navbar-tabs-left">
          <a href="#home" onClick={(event) => handleTabClick('home', event)}>HOME</a>
          <a href="#services" onClick={(event) => handleTabClick('services', event)}>SERVICES</a>
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="Gold Stop Shoes and Repair Logo" />
        </div>
        <div className="navbar-tabs-right">
          <a href="#products" onClick={(event) => handleTabClick('products', event)}>PRODUCTS</a>
          <a href="#reviews" onClick={(event) => handleTabClick('reviews', event)}>REVIEWS</a>
          <a href="#contact" onClick={(event) => handleTabClick('contact', event)}>CONTACT</a>
        </div>
        <div className="navbar-cart">
          <a href="#cart">
            <FaShoppingCart size="2em" />
          </a>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Navbar;
