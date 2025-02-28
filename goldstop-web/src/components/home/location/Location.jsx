import React, { useState } from 'react';
import './location.css';
import ProjectInquiry from './inquiry/Inquiry';

const Location = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  const handleInquiryOpen = () => {
    setShowInquiry(true);
  };

  const handleInquiryClose = () => {
    setShowInquiry(false);
  };

  return (
    <div className='location'>
      <a
        href="https://www.google.com/maps/place/3308+Dunbar+St,+Vancouver,+BC+V6S+2C1,+Canada/"
        target="_blank"
        rel="noopener noreferrer"
        className="map-link"
      >
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5382.352947539112!2d-123.18741900677915!3d49.25718809927711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673038c93a477%3A0xa685fd3f380a4479!2sGold%20Stop%20Shoes%20%26%20Repair!5e0!3m2!1sen!2sca!4v1717278298529!5m2!1sen!2sca"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </a>
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

        <div className="get-in-touch-container">
          <button className="get-in-touch" onClick={handleInquiryOpen}>
            GET IN TOUCH
          </button>
        </div>

        {showInquiry && <ProjectInquiry onClose={handleInquiryClose} />}
      </div>
    </div>
  );
};

export default Location;
