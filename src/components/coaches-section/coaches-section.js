import React from "react";

import CoachesSlider from "../coaches-slider";

const CoachesSection = () => {
  return (
    <section className="section section--coach">
      <div className="container">
        <h3 className="section__title">Our Coaches</h3>
        <p className="section__text">
          Coaches in our school are not only perfect dancers but also have a big
          experience in coaching that is why you will feel really amazing after
          each of your class
        </p>
      </div>
      <CoachesSlider />
    </section>
  );
};

export default CoachesSection;
