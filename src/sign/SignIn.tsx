import React from "react";
import "./SignIn.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";

const SignIn = () => {
  function handleSubmit(): any {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-section">
        <Formik
          initialValues={{}}
          // validate={}
          onSubmit={() => handleSubmit()}
        >
          <Form id="container">
            <h2>Sign In</h2>

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Mật khẩu" />
            <ErrorMessage name="password" component="div" />
            <button type="submit">Sign In</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
