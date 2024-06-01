import React from 'react';
import './location.css';

const Location = () => {
  return (
    <div className='location'>
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5382.352947539112!2d-123.18741900677915!3d49.25718809927711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673038c93a477%3A0xa685fd3f380a4479!2sGold%20Stop%20Shoes%20%26%20Repair!5e0!3m2!1sen!2sca!4v1717278298529!5m2!1sen!2sca"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
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
        
        { /* <button className="get-in-touch">GET IN TOUCH</button> */} {/* Button */}
      </div>
    </div>
  );
}

export default Location;
