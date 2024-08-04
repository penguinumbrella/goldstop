import React, { useState, useEffect } from 'react';
import './serviceBubble.css';

const ServiceBubble = ({ title, description, image, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`service-wrapper ${visible ? 'fade-in' : ''}`}>
      <div className="service">
        <img src={image} alt={title} className="service-image" />
        <div className="service-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBubble;
