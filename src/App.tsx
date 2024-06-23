import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Download from "./download/Download";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Download></Download>
    </Fragment>
  );
}

export default App;
