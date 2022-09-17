import React from "react";
import Logo from "./images/web-logo.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <a href="#Home">
          <img src={Logo} alt="React Logo" />
        </a>
      </div>
      <div className="navbar_links">
        <ul>
          <li>
            <a href="#Home" className="navbar_link">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="navbar_link">
              About Us
            </a>
          </li>
          <li>
            <a href="#Courses" className="navbar_link">
              Courses
            </a>
          </li>
          <li>
            <a href="#Work" className="navbar_link">
              Our Work
            </a>
          </li>
          <li>
            <a href="#Contact" className="navbar_link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
