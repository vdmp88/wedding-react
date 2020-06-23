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

    const { sliderContent } = this.props;

    console.log(sliderContent);

    return (
      <Slider {...settings}>
        {sliderContent.map((el) => {
          const {
            _id,
            direction,
            name,
            teachExperience,
            url,
            workExperience,
            style,
          } = el;
          return (
            <div className="slider__card-outer" key={_id}>
              <div className="slider__card-inner">
                <div className="slider__img">
                  <img src={"img" + url + ".jpg"} alt="coach" />
                </div>
                <div className="slider__desc">
                  <div className="slider__card-id">01</div>
                  <h4 className="slider__title">{name}</h4>
                  <div className="slider_subtitle">{direction}</div>
                  <ul className="slider__list">
                    <li>
                      <span className="mark-text">Work experience</span>{" "}
                      {workExperience} years
                    </li>
                    <li>
                      <span className="mark-text">Teacher for</span>{" "}
                      {teachExperience} years
                    </li>
                    <li>
                      <span className="mark-text">Style</span> {style}
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
          );
        })}
      </Slider>
    );
  }
}
