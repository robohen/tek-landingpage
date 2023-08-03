import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {toggleNightMode} from './actions';
import {BsSun, BsMoon} from 'react-icons/bs';

const DarkModeButton = () => {
  const isNightMode = useSelector((state) => state.isNightMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleNightMode());
  };
  useEffect(() => {
    document.body.style.backgroundColor = isNightMode ? "#292c35" : "#fff";
    const nightModeElements = document.querySelectorAll(".night-mode-available");
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
        onChange={handleDarkModeToggle}
      />
      <label htmlFor="night-mode" className="label">
        {isNightMode ? <BsSun className="fas fa-sun"/> : <BsMoon className="fas fa-moon" />}
        <div className="blob"></div>
      </label>
      <div className={`info night-mode-available ${isNightMode ? "nm" : ""}`}>
        Nightmode
      </div>
    </div>
  );
};

export default DarkModeButton;