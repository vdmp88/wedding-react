import React, { Component } from "react";
import Slider from "react-slick";

export default class ServiceSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      className: "slider slider--services",
      rows: 1,
    };

    return (
      <Slider {...settings}>
        <div className="slider__card-outer">
          <div className="slider__card-inner">
            <div className="slider__img">
              <img src="img/service1.jpg" alt="slide-item" />
            </div>
            <div className="slider__desc">
              <h4 className="slider__title">For Bride and Groom</h4>
              <ul className="slider__list">
                <li>First Dance</li>
                <li>Parent & Child Dance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slider__card-outer">
          <div className="slider__card-inner">
            <div className="slider__img">
              <img src="img/service2.jpg" alt="slide-item" />
            </div>
            <div className="slider__desc">
              <h4 className="slider__title">For Guests</h4>
              <ul className="slider__list">
                <li>Groomsmen Dance</li>
                <li>Parent Dance</li>
                <li>Children’s Dance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slider__card-outer">
          <div className="slider__card-inner">
            <div className="slider__img">
              <img src="img/service3.jpg" alt="slide-item" />
            </div>
            <div className="slider__desc">
              <h4 className="slider__title">Other events</h4>
              <ul className="slider__list">
                <li>Bridal Party Dance</li>
                <li>Anniversary Dance</li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
