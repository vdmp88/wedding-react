import React, { Component } from "react";
import Slider from "react-slick";

export default class CoachesSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
      className: "slider slider--coaches",
      rows: 1,
    };
    return (
      <Slider {...settings}>
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
                  <span className="mark-text">Style</span> Viennese Waltz, Salsa
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
      </Slider>
    );
  }
}
