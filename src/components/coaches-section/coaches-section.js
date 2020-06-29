import React, { Component } from "react";
import Loader from "../loader";
import CoachesSlider from "../coaches-slider";
import DataService from "../../service/data-service";

export default class CoachesSection extends Component {
  dataService = new DataService();

  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    this.getContent();
  }

  getContent = () => {
    this.dataService
      .getCoachSection()
      .then((data) => {
        this.setState({
          data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      data: { meta, content },
      loading,
    } = this.state;
    let showContent;

    if (loading) {
      showContent = <Loader />;
    } else {
      showContent = (
        <>
          <>
            <h3 className="section__title">{meta.title}</h3>
            <p className="section__text">{meta.description}</p>
          </>
          <CoachesSlider sliderContent={content} />
        </>
      );
    }

    return <section className="section section--coach">{showContent}</section>;
  }
}
