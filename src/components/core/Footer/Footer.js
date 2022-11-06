import React from "react";
import Logo from "./images/web-logo.png";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="company_details">
        <div className="footer_organization">
          <img src={Logo} alt="logo" />
          <span>Web of Life</span>
        </div>
        <div className="footer_contact_details">
          <h1>Contact Info</h1>
          <p>Web of Life, Wasgamuwa, Sri Lanka.</p>
          <p>+94 71 22 22 222</p>

          <div className="footer_social_links">
            <span>
              <a href="/">
                <ImFacebook />
              </a>
            </span>
            <span>
              <a href="/">
                <FiInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Copyright © Web of Life. All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
