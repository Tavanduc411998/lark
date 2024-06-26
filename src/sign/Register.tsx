import React from "react";
import "./Register.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
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
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Password must match"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
          });
        }
        console.log("User Registered Successfully!!");
        navigate("/download");
        toast.success("User Registered Successfully!!", {
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
    <div className="register-container">
      <div className="logo">
        <Link to="/download">
          <img src="/images/logo.webp" alt="Logo" />
        </Link>
      </div>
      <div className="register-section">
        <div className="register-box">
          <form id="container" onSubmit={formik.handleSubmit}>
            <h2>Welcome to Lark</h2>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="First Name"
            />
            {formik.errors.firstName && (
              <p className="errorMsg"> {formik.errors.firstName}</p>
            )}
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last Name"
            />
            {formik.errors.lastName && (
              <p className="errorMsg"> {formik.errors.lastName}</p>
            )}
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
            />
            {formik.errors.email && (
              <p className="errorMsg"> {formik.errors.email}</p>
            )}
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
            />
            {formik.errors.password && (
              <p className="errorMsg"> {formik.errors.password}</p>
            )}
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm Password"
            />
            {formik.errors.confirmPassword && (
              <p className="errorMsg"> {formik.errors.confirmPassword}</p>
            )}
            <button type="submit">Register Free</button>
            <p>
              Already have an account yet?{" "}
              <Link to="/sign-in">Sign in now</Link>
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

export default Register;
