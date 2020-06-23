import React, { Component } from "react";

import Header from "../header";
import Footer from "../footer";
import BannerSection from "../banner-section";
import ServiceSection from "../service-section";
import OfferSection from "../offer-section";
import CoachesSection from "../coaches-section";
import LoginModal from "../login-modal";

export default class App extends Component {
  state = { isModalOpen: false };

  modalHandler = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="app-wrapper">
        <LoginModal closeLogin={this.modalHandler} isModalOpen={isModalOpen} />
        <Header openLogin={this.modalHandler} />
        <div className="custom-container">
          <BannerSection />
          <ServiceSection />
          <OfferSection />
          <CoachesSection />
        </div>
        <Footer />
      </div>
    );
  }
}
