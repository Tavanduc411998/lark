import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Download from "./download/Download";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./sign/SignIn";
import Register from "./sign/Register";
import { auth } from "./firebase/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  });
  console.log(user);

  return (
    <Fragment>
      <Routes>
        <Route path="/download" element={<Download />} />
        <Route
          path="/sign-in"
          element={user ? <Navigate to="/download" /> : <SignIn />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/download" /> : <Register />}
        />
        <Route path="/" element={<Download />} />
        <Route path="*" element={<Navigate to="download" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
