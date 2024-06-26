import React, { useState } from "react";
import "./SignIn.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

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
      <div className="sign-in-section">
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
        </form>
      </div>
    </div>
  );
};

export default SignIn;
