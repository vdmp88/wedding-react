import React from "react";

import Button from "../button";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="custom-container header__wrapper">
        <div className="logo">
          <a href="#logo">
            <img src="img/logo.svg" alt="logo" />
          </a>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__title">
              <h3>Menu</h3>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#coach">Our Coaches</a>
            </li>
            <li>
              <a href="#test">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#review">Lesson Review</a>
            </li>
            <li>
              <Button classList="default-button dark-btn" text="Start" />
            </li>
          </ul>
        </nav>
        <button className="hamburger hamburger-spin">
          <span className="hamburger__box">
            <span className="hamburger__inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
