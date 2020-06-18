import React from "react";

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
        <div className="slider slider--coaches">
          <div className="slider__card-outer">
            <div className="slider__card-inner">
              <div className="slider__img">
                <img src="img/coach.png" alt="coach" />
              </div>
              <div className="slider__desc">
                <div className="slider__card-id">01</div>
                <h4 className="slider__title">For Bride and Groom</h4>
                <div className="slider_subtitle">Dancer</div>
                <ul className="slider__list">
                  <li>
                    <span className="mark-text">Work experience</span> 8 years
                  </li>
                  <li>
                    <span className="mark-text">Teacher for</span> 3 years
                  </li>
                  <li>
                    <span className="mark-text">Style</span> Viennese Waltz,
                    Salsa
                  </li>
                </ul>
                <div className="slider__btn">
                  <button className="default-button brand-btn">
                    Let's start
                  </button>
                  <button className="default-button brand-btn brand-btn--mobile">
                    <img src="img/slider-button.svg" alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__card-outer">
            <div className="slider__card-inner">
              <div className="slider__img">
                <img src="img/coach-2.png" alt="coach" />
              </div>
              <div className="slider__desc">
                <div className="slider__card-id">02</div>
                <h4 className="slider__title">For Bride and Groom</h4>
                <div className="slider_subtitle">Dancer</div>
                <ul className="slider__list">
                  <li>
                    <span className="mark-text">Work experience</span> 10 years
                  </li>
                  <li>
                    <span className="mark-text">Teacher for</span> 5 years
                  </li>
                  <li>
                    <span className="mark-text">Style</span> HipHop
                  </li>
                </ul>
                <div className="slider__btn">
                  <button className="default-button brand-btn">
                    Let's start
                  </button>
                  <button className="default-button brand-btn brand-btn--mobile">
                    <img src="img/slider-button.svg" alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
