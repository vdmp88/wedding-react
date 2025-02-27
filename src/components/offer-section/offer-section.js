import React, { Component } from "react";
import Loader from "../loader";
import Button from "../button";
import EditModal from "../edit-modal";

import DataService from "../../service/data-service";

export default class OfferSection extends Component {
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
      .getOfferSection()
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
    const { isLogin, openModal, closeModal, isModalOpen } = this.props;
    let showContent;

    if (loading) {
      showContent = <Loader />;
    } else {
      showContent = (
        <>
          <EditModal
            updateCallback={this.getContent}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
            data={this.state.data}
          />
          <div className="editatble-btn">
            {isLogin ? (
              <Button
                callback={openModal}
                classList="default-button dark-btn"
                text="Edit"
              />
            ) : (
              ""
            )}
          </div>
          <h3 className="section__title">{meta.title}</h3>
          <p className="section__text">{meta.description}</p>
          <ul className="list list--offer">
            {content.map((el) => {
              return (
                <li className="list__card" key={el._id}>
                  <span className="icon icon-coaches"></span>
                  <p className="list__text">{el.title}</p>
                </li>
              );
            })}
          </ul>
        </>
      );
    }

    return <section className="section">{showContent}</section>;
  }
}
