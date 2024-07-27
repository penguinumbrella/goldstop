import React, { useRef } from 'react';
import './homeView.css';
import IntroView from './introView/introView';
import Services from './services/Services';
import Products from './products/Products';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';
import Navbar from '../navbar/Navbar'; // Adjust the import path as needed

const HomeView = ({ onTabClick }) => {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='homeView'>
      <Navbar 
        onTabClick={onTabClick} 
        servicesRef={servicesRef} 
        productsRef={productsRef} 
        reviewsRef={reviewsRef} 
        contactRef={contactRef} 
      />
      {/*<IntroView servicesRef={servicesRef} />*/}
      <Services ref={servicesRef} onTabClick={onTabClick} />
      <Products ref={productsRef} />
      <Reviews ref={reviewsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default HomeView;
