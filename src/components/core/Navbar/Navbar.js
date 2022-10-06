import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Logo from "./images/web-logo.png";

import "./Navbar.scss";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <img src={Logo} alt="Logo" />
        <h3>Web of Life</h3>
      </div>

      <div className="navbar_links">
        <div className={`navbar_links_screen ${navbarOpen ? "open" : ""}`}>
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            )}
          </button>
        </div>
      </div>

      <div className={`navbar_links_display ${navbarOpen ? "open" : ""}`}>
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu style={{ color: "#fff", width: "40px", height: "40px" }} />
          )}
        </button>
        <div className="navbar_links_logo">
          <img src={Logo} alt="Logo" />
          <h3>Web of Life</h3>
        </div>
        <div className="navbar_links_options">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/mission">Our Mission</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
