import React, { useState } from "react";
import "./Holidays.css";

const Holidays = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null; // Don't render the banner if dismissed

  return (
    <div className={`holiday-banner ${isOpen ? "open" : "closed"}`}>
      <div className="banner-header">
        <span className="banner-title" onClick={() => setIsOpen(!isOpen)}>
          Holiday Hours
        </span>
        <button
          className="exit-button"
          onClick={() => setIsDismissed(true)}
        >
          ✖
        </button>
      </div>
      {isOpen && (
        <div className="banner-content">
          <p>We are closed from December 22nd to January 1st.</p>
          <p>Starting on January 2nd, we will resume our regular hours.</p>
        </div>
      )}
    </div>
  );
};

export default Holidays;
