import React from "react";
import "./Register.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Register = () => {
  function handleSubmit(): any {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="register-container">
      <div className="register-section">
      <Formik
          initialValues={{}}
          // validate={}
          onSubmit={() => handleSubmit()}
        >
          <Form id="container">
            <h2>Welcome to Lark</h2>
            <Field type="text" name="fname" placeholder="Tên" />
                  <ErrorMessage name="fname" component="div" />
                  <Field type="text" name="lname" placeholder="Họ" />
                  <ErrorMessage name="lname" component="div" />
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                  <ErrorMessage name="password" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Nhập lại mật khẩu"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit">Register Free</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
