import React from "react";
import "../styles/style.css";
import "material-icons/iconfont/material-icons.css";
import imgLogo from "../assets/cp++1.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav class="nav">
      <ul>
        <li>
          <Link to="/" class="brand">
            <img src={imgLogo} alt="CP" />
            <h3>++</h3>
          </Link>
        </li>
        <li>
          <Link to="/cpguide" class="brand">
            CP Guide
          </Link>
        </li>
        <li>
          <a href="index.html" class="brand">
            Challenge
          </a>
        </li>
        <li>
          <a href="index.html" class="brand">
            Contest
          </a>
        </li>
        <li>
          <a href="index.html" class="brand">
            Quiz
          </a>
        </li>
        {/* <li>
          <a href="index.html" class="brand">
            Course
          </a>
        </li> */}
        <li>
          <a href="/contact-us" class="brand">
            Contact Us
          </a>
        </li>
      </ul>
      <div class="account">
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signin">
          <h3>LogIn</h3>
        </Link>
        {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
      </div>
    </nav>
  );
};

export default navbar;
