// src/components/beforeAfterSlider/BeforeAfterSlider.jsx
import React, { useState, useRef } from 'react';
import './beforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Default position at 50%
  const sliderRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position))); // Ensure position is within bounds
  };

  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;

    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position))); // Ensure position is within bounds
  };

  return (
    <div 
      className="slider-container"
      ref={sliderRef}
      onMouseMove={(e) => e.buttons === 1 && handleMouseMove(e)} // Only track if mouse button is held
      onTouchMove={handleTouchMove}
    >
      <img src={beforeImage} alt="Before" className="before-image" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} />
      <img src={afterImage} alt="After" className="after-image" />
      <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="handle"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
