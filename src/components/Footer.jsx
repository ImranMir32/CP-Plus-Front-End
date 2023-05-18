import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import {
  FaDiscord,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* bottom section  */}
      <div className="footer-bottom--section">
        <hr />
        <div className="container-footer">
          <div className="box-2">
            <div className="box-3">
              <FaFacebookF className="icons" />
            </div>
            <div className="box-3">
              <FaYoutube className="icons" />
            </div>
            <div className="box-3">
              <FaLinkedinIn className="icons" />
            </div>
            <div className="box-3">
              <FaInstagram className="icons" />
            </div>
            <div className="box-3">
              <FaDiscord className="icons" />
            </div>
          </div>

          <div className="box-2">
            <Link to="/about-us" class="brand">
              <h3 className="footer-text">About Us</h3>
            </Link>
            <Link to="/contact-us" class="brand">
              <h3 className="footer-text">Contact Us</h3>
            </Link>
            <Link to="/term&privacy" class="brand">
              <h3 className="footer-text">TERMS & POLICY</h3>
            </Link>
          </div>
          <div className="box-2">
            <h4>©{new Date().getFullYear()} CP++. All Rights Reserved</h4>
          </div>
        </div>
      </div>
    </>
  );
};

// const Wrapper = styled.section`

// `;

export default Footer;
