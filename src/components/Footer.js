import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); // Updates every day

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="footer night-mode-available text body">
      <a href="https://github.com/robohen" target="_blank" rel="noopener noreferrer">
        <img
          className="githubicon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/116px-Font_Awesome_5_brands_github.svg.png"
          alt="github-icon"
        />
      </a>
      <span className="span">&#169;{currentYear} HenryCanCode</span>
      <a href="https://www.linkedin.com/in/henrygutierrez1995/" target="_blank" rel="noopener noreferrer">
        <img
          className="linkedinicon"
          src="https://img.icons8.com/ios-glyphs/452/linkedin.png"
          alt="linkedin-icon"
        />
      </a>
    </div>
  );
};

export default Footer;