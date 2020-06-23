import React, { Component } from "react";
import ServiceSlider from "../service-slider";
import Loader from "../loader";
import DataService from "../../service/data-service";

export default class ServiceSection extends Component {
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
      .getServiceSection()
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
        <div>
          <h3 className="section__title">{data.meta.title}</h3>
          <p className="section__text">{data.meta.description}</p>
          <ServiceSlider sliderContent={data.content} />
        </div>
      );
    }

    return <section className="section">{showContent}</section>;
  }
}
