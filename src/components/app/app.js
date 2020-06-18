import React, { Component } from "react";

import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import BannerSection from "../banner-section";
import ServiceSection from "../service-section";
import OfferSection from "../offer-section";
import CoachesSection from "../coaches-section";

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <AppHeader />
        <div className="custom-container">
          <BannerSection />
          <ServiceSection />
          <OfferSection />
          <CoachesSection />
        </div>
        <AppFooter />
      </div>
    );
  }
}
