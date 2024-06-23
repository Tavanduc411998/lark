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
            <i className="fa-solid fa-download"></i>
            Download for PC
          </button>
        </div>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default Download;
