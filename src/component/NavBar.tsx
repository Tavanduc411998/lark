import React from "react";
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <img src="/images/logo.webp" alt="Logo" />
          </li>
          <li className="nav-item nav-text">
            <p>Download</p>
          </li>
          <li className="nav-item nav-text">
            <p>About</p>
          </li>
        </ul>
      </div>

      <div className="navbar-user">
        <button className="sign-in">
          Sign In
        </button>
        <button className="sign-up">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
