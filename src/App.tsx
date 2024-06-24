import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import Download from "./download/Download";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign/SignIn";
import Register from "./sign/Register";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Download />} />
        <Route path="*" element={<Navigate to="download" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
