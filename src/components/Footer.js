import React from 'react';

const Footer = () => {
  return (
    <div className="footer night-mode-available text body">
      <a href="https://github.com/robohen">
        <img
          className="githubicon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/116px-Font_Awesome_5_brands_github.svg.png"
          alt="github-icon"
        />
      </a>
      <span className="span">©2023 HenryCanCode</span>
      <a href="https://www.linkedin.com/in/henry-gutierrez-27b65a247/">
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