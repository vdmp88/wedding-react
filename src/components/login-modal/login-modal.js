import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import Button from "../button";
import { Formik } from "formik";

export default class LoginModal extends Component {
  authService = new AuthService();

  handleSubmit = (values, { resetForm }) => {
    const { closeLogin } = this.props;

    this.authService
      .login(values)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("currentUser", JSON.stringify(res.access_token));
          resetForm();
          closeLogin();
          this.props.checkAuth();
        } else {
          alert("Input current data");
        }
      });
  };

  render() {
    const { isModalOpen, closeLogin } = this.props;
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={this.handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "You must enter a email";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "You must enter a password";
          } else if (values.password.length < 6) {
            errors.password = "You have to enter at least 6 digit";
          }

          return errors;
        }}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
          <form
            onSubmit={handleSubmit}
            className="modal"
            style={{ display: isModalOpen ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Wedding Dance:</h5>
                </div>
                <div className="modal-body">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Email:</span>
                    </div>
                    <input
                      className="form-control"
                      onChange={handleChange}
                      value={values.email}
                      type="text"
                      name="email"
                    />
                  </div>
                  <div className="input-error">
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="input-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Password:</span>
                    </div>
                    <input
                      autoComplete="on"
                      className="form-control"
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      name="password"
                    />
                  </div>
                  <div className="input-error">
                    {errors.password && touched.password && errors.password}
                  </div>
                </div>
                <div className="modal-footer">
                  <Button
                    text="Login"
                    classList="default-button dark-btn"
                    htmlType="submit"
                  />
                  <Button
                    callback={closeLogin}
                    classList="default-button dark-btn"
                    text="Close"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
