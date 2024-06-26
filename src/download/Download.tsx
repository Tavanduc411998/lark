import React, { Fragment, useEffect, useState } from "react";
import "./Download.scss";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import NavBar from "../component/NavBar";

const Download = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  });

  const handleDownload = () => {
    if (user) {
      window.location.href =
        "https://drive.usercontent.google.com/u/0/uc?id=1tmopYGQcCNTK0Ew2noOstu0Xsj4IqUH5&export=download";
    } else {
      window.alert("You must login to download");
      navigate("/sign-in");
    }
  };

  return (
    <Fragment>
      <NavBar />

      <div className="download-container">
        <div className="header">
          <div>
            <h2>Lark for Windows</h2>
            <p>Start your journey to productivity today. Try Lark for free</p>
            <button className="download-btn" onClick={() => handleDownload()}>
              <span>Download for Window</span>
              <FontAwesomeIcon icon={faWindows} />
            </button>
          </div>
        </div>
        <div className="body">
          <img src="/images/devices.webp" alt="" />
        </div>
        <div className="footer">
          <div className="logo">
            <img src="/images/logo.webp" alt="Logo" />
          </div>
          <div>
            <h4>Lark</h4>
            <ul>
              <li>Overview</li>
              <li>Price</li>
              <li>Download</li>
              <li>Admin Console</li>
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul>
              <li>Support Conter</li>
              <li>Partner</li>
              <li>API</li>
              <li>Change Log</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Career Opportunities</li>
              <li>PR Inquiries</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Juridical</h4>
            <ul>
              <li>Customer Terms of Service</li>
              <li>User Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Acceptable Use Policy</li>
              <li>Cookie Policy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Download;
