import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo-top.png';
import './navbar.css';

const Navbar = ({ onTabClick, servicesRef, productsRef, reviewsRef, contactRef }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleTabClick = (ref, event) => {
    event.preventDefault();
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(ref);
  };

  const handleScroll = () => {
    if (window.scrollY > prevScrollY.current) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    prevScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ChakraProvider>
      <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="navbar-social">
          <a href="https://www.facebook.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size="2em" />
          </a>
          <a href="https://www.instagram.com/goldstopshoes" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="2em" />
          </a>
        </div>
        <div className="navbar-tabs-left">
          <a href="#home" onClick={(event) => handleTabClick(null, event)}>HOME</a>
          <a href="#services" onClick={(event) => handleTabClick(servicesRef, event)}>SERVICES</a>
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="Gold Stop Shoes and Repair Logo" />
        </div>
        <div className="navbar-tabs-right">
          <a href="#products" onClick={(event) => handleTabClick(productsRef, event)}>PRODUCTS</a>
          <a href="#reviews" onClick={(event) => handleTabClick(reviewsRef, event)}>REVIEWS</a>
          <a href="#contact" onClick={(event) => handleTabClick(contactRef, event)}>CONTACT</a>
        </div>
        <div className="navbar-cart">
          <a href="#cart">
            <FaShoppingCart size="2em" />
          </a>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Navbar;
