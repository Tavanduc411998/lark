import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const NavBar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  });

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/download");
      console.log("User logged out successfully!");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="navbar-container">
      <div className="navbar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/download">
              <img src="/images/logo.webp" alt="Logo" />
            </Link>
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
        {user ? (
          <>
            <Link to="/download">
              <button className="sign-in" onClick={handleLogout}>
                Log out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <button className="sign-in">Sign In</button>
            </Link>
            <Link to="/register">
              <button className="sign-up">Try for free</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
