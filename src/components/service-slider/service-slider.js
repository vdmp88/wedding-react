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

    const { sliderContent } = this.props;

    const elements = sliderContent.map((el) => {
      const { _id, title, url } = el;

      return (
        <div className="slider__card-outer" key={_id}>
          <div className="slider__card-inner">
            <div className="slider__img">
              <img src={"img" + url + ".jpg"} alt="slide-item" />
            </div>
            <div className="slider__desc">
              <h4 className="slider__title">{title}</h4>
              <ul className="slider__list">
                <li>First Dance</li>
                <li>Parent & Child Dance</li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return <Slider {...settings}>{elements}</Slider>;
  }
}
