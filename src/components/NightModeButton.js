import React, { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export const NightModeButton = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    localStorage.setItem('isNightMode', isNightMode);
    document.body.style.backgroundColor = isNightMode ? "#292c35" : "#fff";
    const nightModeElements = document.querySelectorAll(".night-mode-available", ".text");
    nightModeElements.forEach((element) => {
      element.classList.toggle("night", isNightMode);
    });
  }, [isNightMode]);

  return (
    <div className="NM-button">
      <input
        type="checkbox"
        className="checkbox"
        id="night-mode"
        checked={isNightMode}
        onChange={toggleNightMode}
      />
      <label htmlFor="night-mode" className="label">
        {isNightMode ? <BsSun className="fas fa-sun"/> : <BsMoon className="fas fa-moon" />}
        <div className="blob"></div>
      </label>
      
    </div>
  );
};

