import React, { Component } from "react";
import DataService from "../../service/data-service";
import Loader from "../loader";

export default class BannerSection extends Component {
  dataService = new DataService();

  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    this.getContent();
  }

  getContent() {
    this.dataService
      .getBannerSection()
      .then((data) => {
        this.setState({
          data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data, loading } = this.state;
    let showContent;

    if (loading) {
      showContent = <Loader />;
    } else {
      showContent = (
        <div className="container section__content">
          <div className="section__wrapper section__wrapper--lesson-desc">
            <h1 className="section__title">{data.meta.title}</h1>
            <span className="section__subtitle">{data.meta.location}</span>
            <p className="section__text">{data.meta.description}</p>
            <div className="section__btns">
              <button className="default-button brand-btn">Let's start</button>
            </div>
          </div>
          <div className="section__img"></div>
        </div>
      );
    }

    return <section className="section section--lesson">{showContent}</section>;
  }
}
