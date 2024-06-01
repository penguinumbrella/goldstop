import React from 'react';
import './services.css';
import ServicesView from '../../servicesView/servicesView';

const Services = ({ onTabClick }) => {

  const handleTabClick = (view, event) => {
    console.log("Tab clicked", view);
    // Additional logic can be added here
    onTabClick(view);
    const tabRect = event.target.getBoundingClientRect();
    console.log(tabRect);
  };

  return (
    <div className='services'>
      <h2>Our Services.</h2>
      <div className="service-table">
        <div className="service">
            <h3>Rock Climbing Shoes</h3>
            <p>Rand and half sole repairs</p>
        </div>
        <div className="service">
            <h3>Full Soles</h3>
            <p>Get new soles for your work boots, hiking boots, Birkenstock, or sandals</p>
        </div>
        <div className="service">
            <h3>Half Soles</h3>
            <p>Protect your leather soles with rubber, replace worn down soles, or add soles with more tread</p>
        </div>
        <div className="service">
            <h3>Heels</h3>
            <p>Replace your worn down heels</p>
        </div>
        <div className="service">
            <h3>Zipper Repair</h3>
            <p>We can fix the zippers on your boots, coats, bags, and luggage</p>
        </div>
        <div className="service">
            <h3>Shoe Cleaning & Shining</h3>
            <p>We can clean your sneakers and shine your dress shoes</p>
        </div>
        <div className="service">
            <h3>Shoe Stretching</h3>
            <p>Bunion punching, instep, and width stretching</p>
        </div>
        <div className="service">
            <h3>Sharpening</h3>
            <p>Knives and scissors</p>
        </div>
      </div>
      {/* <button className="see-more" onClick={(event) => handleTabClick('services', event)}>See More Services</button> */}
    </div>
  );
}

export default Services;
