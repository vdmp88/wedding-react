import React from "react";

const BannerSection = () => {
  return (
    <section className="section section--lesson">
      <div className="container section__content">
        <div className="section__wrapper section__wrapper--lesson-desc">
          <h1 className="section__title">Wedding Dance Lessons</h1>
          <span className="section__subtitle">New Jersey</span>
          <p className="section__text">
            The wedding dance is one of the most important dances in your life.
            You look perfect and the whole audience is looking at you. Also, it
            becomes the favorite moment you like to play on videos and photos.
            Feel the moment
          </p>
          <div className="section__btns">
            <button className="default-button brand-btn">Let's start</button>
          </div>
        </div>
        <div className="section__img"></div>
      </div>
    </section>
  );
};

export default BannerSection;
