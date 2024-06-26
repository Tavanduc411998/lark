import React from "react";
import "./Register.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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
      <div className="register-section">
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
        </form>
      </div>
    </div>
  );
};

export default Register;
