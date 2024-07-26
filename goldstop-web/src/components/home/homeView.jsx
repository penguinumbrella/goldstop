import React, { useRef } from 'react';
import './homeView.css';
import IntroView from './introView/introView';
import Services from './services/Services';
import Location from './location/Location';
import Products from "./products/Products"
import Reviews from "./reviews/Reviews"
import Contact from "./contact/Contact"

const HomeView = ({ onTabClick }) => {
  const servicesRef = useRef(null);

  return (
    <div className='homeView'>
      <IntroView servicesRef={servicesRef} />
      <Services ref={servicesRef} onTabClick={onTabClick} />
      <Products />
      <Reviews/>
      <Contact/>
    </div>
  );
};

export default HomeView;
