import React, { Component } from "react";

import Header from "../header";
import Footer from "../footer";
import BannerSection from "../banner-section";
import ServiceSection from "../service-section";
import OfferSection from "../offer-section";
import CoachesSection from "../coaches-section";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
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
