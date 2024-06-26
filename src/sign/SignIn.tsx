import React, { useState } from "react";
import "./SignIn.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password must be 8 characters, at least one letter and one number"
        ),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log("User logged in Successfully");
        navigate("/download");
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
      } catch (error: any) {
        console.log(error.message);

        toast.error(error.message, {
          position: "bottom-center",
        });
      }
    },
  });

  return (
    <div className="sign-in-container">
      <div className="logo">
        <Link to="/download">
          <img src="/images/logo.webp" alt="Logo" />
        </Link>
      </div>
      <div className="sign-in-section">
        <div className="sign-in-box">
          <form id="container" onSubmit={formik.handleSubmit}>
            <h2>Sign In</h2>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your email"
            />
            {formik.errors.email && (
              <p className="errorMsg"> {formik.errors.email}</p>
            )}
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your password"
            />
            {formik.errors.password && (
              <p className="errorMsg"> {formik.errors.password}</p>
            )}
            <button type="submit">Sign In</button>
            <p>
              No organization account yet?{" "}
              <Link to="/register">Sign up now</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="promote-section">
        <div>
          <div className="header">
            <img src="/images/emoji.svg" alt="emoji" />
            <h4>
              Say goodbye to troublesome operations.
              <br />
              Welcome Lark.
            </h4>
          </div>
          <hr />
          <div className="body">
            <p>
              <span>Free service package</span> start from <span>$0/month</span>
            </p>
            <p>No credit card required</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#1eea1a" }} />
                Up to 50 users
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#1eea1a" }} />
                Unlimited chat with full message history context
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#1eea1a" }} />
                Secure and customizable business email
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#1eea1a" }} />
                Automatic language translation
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#1eea1a" }} />
                100 GB cloud storage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
