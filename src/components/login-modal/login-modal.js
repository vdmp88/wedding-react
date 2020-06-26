import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import Button from "../button";

export default class LoginModal extends Component {
  authService = new AuthService();

  handleSubmit = (e) => {
    e.preventDefault();

    const thisForm = e.target;
    const { closeLogin } = this.props;

    this.authService
      .login({})
      .then((data) => {
        return data.json();
      })
      .then((token) => {
        localStorage.setItem("currentUser", JSON.stringify(token.access_token));
        closeLogin();
        thisForm.reset();
      })
      .catch((err) => {
        console.log("error");
      });
  };

  render() {
    const { isModalOpen, closeLogin } = this.props;
    const { user } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="modal"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal__content">
          <div className="modal__group">
            <label htmlFor="email">Email:</label>
            <input
              onChange={this.handleInputChange}
              value={user.email}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="modal__group">
            <label htmlFor="password">Password:</label>
            <input
              value={user.password}
              onChange={this.handleInputChange}
              type="password"
              name="password"
              required
            />
          </div>
          <div>
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
      </form>
    );
  }
}
