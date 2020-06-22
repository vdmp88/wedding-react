import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="custom-container">
        <div className="footer__content">
          <div className="footer__logo">
            <a href="#footer">
              <img src="img/footer-logo.svg" alt="footer-logo" />
            </a>
          </div>
          <div className="footer__copy">Copyright © 2019</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
