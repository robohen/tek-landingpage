import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const handleCopyLink = () => {
    const mainWebsiteLink = window.location.href;
    navigator.clipboard.writeText(mainWebsiteLink).then(() => {
      alert('Link copied to clipboard!');
    });
  };
  return (
    <div className="topnav">
      <Link to="/" className="active" >
        Home
      </Link>
      <Link to="/ProjectsPage">Projects</Link>
      <Link to ="/ContactPage">Contact</Link>
      <Link className="link" onClick={handleCopyLink}>
        Link
      </Link>
    </div>
  );
};

export default Navbar;