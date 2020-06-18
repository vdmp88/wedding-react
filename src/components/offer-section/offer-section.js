import React from "react";

const OfferSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section__title" data-wow-duration="2s">
          What we offer
        </h3>
        <p className="section__text wow fadeIn" data-wow-duration="3s">
          Our goal is not only to teach you how to dance but also give the best
          unforgettable memories about preparing to your event
        </p>
        <ul className="list list--offer">
          <li className="list__card">
            <span className="icon icon-coaches"></span>
            <p className="list__text">Talented Coaches</p>
          </li>
          <li className="list__card">
            <span className="icon icon-door"></span>
            <p className="list__text">Cozy rooms for training</p>
          </li>
          <li className="list__card">
            <span className="icon icon-coffee"></span>
            <p className="list__text">Coffee, tea, and cookies</p>
          </li>
          <li className="list__card">
            <span className="icon icon-good-form"></span>
            <p className="list__text">Good physical form</p>
          </li>
          <li className="list__card">
            <span className="icon icon-star"></span>
            <p className="list__text">
              Self Confidence and success on your event
            </p>
          </li>
          <li className="list__card">
            <span className="icon icon-emotions"></span>
            <p className="list__text">Exciting emotions and a lot of fun</p>
          </li>
          <li className="list__card">
            <span className="icon icon-photos"></span>
            <p className="list__text">Great photos from your event</p>
          </li>
          <li className="list__card">
            <span className="icon icon-happiness"></span>
            <p className="list__text">Spend hours together in happiness</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OfferSection;
