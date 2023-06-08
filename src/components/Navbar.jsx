import React, { useEffect, useContext } from "react";

import "../styles/style.css";
import "material-icons/iconfont/material-icons.css";
import imgLogo from "../assets/cp++1.png";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { GlobalStateContext } from "../Context/GlobalContext";

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const { userName } = useContext(GlobalStateContext);

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
          <Link to="/challenge" class="brand">
            Challenge
          </Link>
        </li>
        <li>
          <Link to="" class="brand">
            Contest
          </Link>
        </li>
        <li>
          <Link to="/quiz" class="brand">
            Quiz
          </Link>
        </li>

        <li>
          <Link to="/contact-us" class="brand">
            Contact Us
          </Link>
        </li>
      </ul>
      <div class="account">
        <Link to="/user-profile" className="user-profile">
          <div className="user-profile-logo">
            <span class="material-icons-outlined" title="Account">
              account_circle
            </span>
          </div>
          <div className="user-profile-logo">
            <p>x.{userName}</p>
          </div>
        </Link>

        <Link to="/signin">
          {/* <h3>LogIn</h3> */}
          <AiOutlineLogout size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
