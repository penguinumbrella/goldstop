import React from 'react';
import './location.css';

const Location = () => {
  return (
    <div className='location'>
      <div className="image-placeholder"></div> {/* Placeholder for image */}
      <div className="info">
        <h2>Contact Us</h2> {/* Title */}
        <div className='info-subsect'>
          <p>(604) 734-7477</p> {/* Subtitle */}
          <p>goldstoprepair@gmail.com</p> {/* Subtitle */}
        </div>
        <div className='info-subsect'>
          <p>3308 Dunbar Street</p> {/* Subtitle */}
          <p>Vancouver, BC V6S 2C1</p> {/* Subtitle */}
        </div>
        <div className='info-subsect'>
          <p>Hours: Tuesday - Saturday 9:30AM  - 5:30PM </p> {/* Subtitle */}
        </div>
        <button className="get-in-touch">GET IN TOUCH</button> {/* Button */}
      </div>
    </div>
  );
}

export default Location;
