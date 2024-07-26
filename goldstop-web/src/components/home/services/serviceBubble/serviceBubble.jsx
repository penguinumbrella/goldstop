import React from 'react';
import './serviceBubble.css'; // Create and style this CSS file as needed

const ServiceBubble = ({ title, description, image }) => {
  return (
    <div className="service-wrapper">
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
