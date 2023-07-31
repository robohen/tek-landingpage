import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="topnav">
      <Link to="/" className="active" >
        Home
      </Link>
      <Link to="/ProjectsPage">Projects</Link>
      <Link to ="/ContactPage">Contact</Link>
      <Link className="link" to ="#">
        Link
      </Link>
    </div>
  );
};

export default Navbar;