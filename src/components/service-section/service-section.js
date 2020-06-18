import React from "react";
import ServiceSlider from "../service-slider";

const ServiceSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section__title">Our Services</h3>
        <p className="section__text">
          We want to make your wedding day perfect that is why suggest a lot of
          options for dance: not only for a bride and groom but for their
          friends and relatives
        </p>
        <ServiceSlider />
      </div>
    </section>
  );
};

export default ServiceSection;
