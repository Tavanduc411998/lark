import React from "react";
import "./Download.scss";

const Download = () => {
  return (
    <div className="download-container">
      <div className="header">
        <div>
          <h2>Lark for Windows</h2>
          <p>Start your journey to productivity today. Try Lark for free.s</p>
          <button className="download-btn">
            <img src="/images/download-icon.image" alt="" />
            Download for PC
          </button>
        </div>
      </div>
      <div className="body">
        <img src="/images/devices.webp" alt="" />
      </div>
      <div className="footer">
        <div>
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
  );
};

export default Download;
