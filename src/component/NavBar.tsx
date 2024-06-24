import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <img src="/images/logo.webp" alt="Logo" />
          </li>
          <li className="nav-item nav-text">
            <Link to="/download">
              <p>Download</p>
            </Link>
          </li>
          <li className="nav-item nav-text">
            <p>About</p>
          </li>
        </ul>
      </div>

      <div className="navbar-user">
        <Link to="/sign-in">
          <button className="sign-in">Sign In</button>
        </Link>
        <Link to="register">
          <button className="sign-up">Try for free</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
