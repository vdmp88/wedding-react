import React, { Component } from "react";
import Loader from "../loader";
import Button from "../button";

import DataService from "../../service/data-service";

export default class Header extends Component {
  dataService = new DataService();

  state = {
    data: {},
    loading: true,
    isLogin: this.props.isLogin,
  };

  componentDidMount() {
    this.getContent();
  }

  getContent = () => {
    this.dataService
      .getNavigation()
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
    const { data, loading } = this.state;
    const { openLogin, isLogin, onLogout } = this.props;
    let showContent;

    if (loading) {
      showContent = <Loader />;
    } else {
      showContent = (
        <div className="custom-container header__wrapper">
          <div className="logo">
            <a href="#logo">
              <img src="img/logo.svg" alt="logo" />
            </a>
          </div>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__title">
                <h3>Menu</h3>
              </li>
              {data.content.map((el) => {
                return (
                  <li key={el.title}>
                    <a href={el.url}>{el.title}</a>
                  </li>
                );
              })}
              <li>
                {isLogin ? (
                  <Button
                    text="Logout"
                    classList="default-button dark-btn"
                    callback={onLogout}
                  />
                ) : (
                  <Button
                    callback={openLogin}
                    classList="default-button dark-btn"
                    text="Login"
                  />
                )}
              </li>
            </ul>
          </nav>
          <button className="hamburger hamburger-spin">
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>
        </div>
      );
    }

    return <header className="header">{showContent}</header>;
  }
}
