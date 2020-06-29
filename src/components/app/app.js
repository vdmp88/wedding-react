import React, { Component } from "react";

import Header from "../header";
import Footer from "../footer";
import BannerSection from "../banner-section";
import ServiceSection from "../service-section";
import OfferSection from "../offer-section";
import CoachesSection from "../coaches-section";
import LoginModal from "../login-modal";
import AuthService from "../../service/auth-service";

export default class App extends Component {
  authService = new AuthService();

  state = { loginModal: false, isLogin: false, editModal: false };

  loginModalHandler = () => {
    this.setState({
      loginModal: !this.state.loginModal,
    });
  };

  editModalHandler = () => {
    this.setState({
      editModal: !this.state.editModal,
    });
  };

  logout = () => {
    this.authService.logout();
    this.setState({
      isLogin: false,
    });
  };

  checkAuth = () => {
    this.setState({ isLogin: !!localStorage.getItem("currentUser") });
  };

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    const { loginModal, isLogin, editModal } = this.state;

    return (
      <>
        <LoginModal
          closeLogin={this.loginModalHandler}
          isModalOpen={loginModal}
          checkAuth={this.checkAuth}
          isLogin={isLogin}
        />
        <Header
          openLogin={this.loginModalHandler}
          isLogin={isLogin}
          onLogout={this.logout}
        />
        <div className="custom-container">
          <BannerSection />
          <ServiceSection />
          <OfferSection
            isLogin={isLogin}
            openModal={this.editModalHandler}
            isModalOpen={editModal}
            closeModal={this.editModalHandler}
          ></OfferSection>
          <CoachesSection />
        </div>
        <Footer />
      </>
    );
  }
}
