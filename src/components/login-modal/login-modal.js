import React, { Component } from "react";

export default class LoginModal extends Component {
  render() {
    const { isModalOpen, closeLogin } = this.props;

    return (
      <div
        className="modal"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal__content">
          modal content
          <button onClick={closeLogin}>close</button>
        </div>
      </div>
    );
  }
}
