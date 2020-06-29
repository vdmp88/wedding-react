import React, { Component } from "react";
import Button from "../button";
import { Formik } from "formik";

import DataService from "../../service/data-service";

export default class EditModal extends Component {
  dataService = new DataService();

  state = {
    data: this.props.data,
  };

  handleSubmit = (values) => {
    this.dataService.updateOfferSection(values).then((res) => {
      if (res.ok) {
        console.log(res);

        this.props.closeModal();
        this.props.updateCallback();
      }
    });
  };

  render() {
    const { isModalOpen, closeModal } = this.props;
    const {
      data: { meta, content, type, action },
    } = this.state;

    return (
      <Formik
        initialValues={{
          meta: { title: meta.title, description: meta.description },
          content,
          type,
          action,
        }}
        onSubmit={this.handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="modal"
            style={{ display: isModalOpen ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Wedding Dance:</h5>
                </div>
                <div className="modal-body">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Title:</span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      name="meta.title"
                      value={values.meta.title}
                      onChange={handleChange}
                    />
                    <span className="input-error"></span>
                  </div>
                  <div className="input-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Description:</span>
                    </div>
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="meta.description"
                      value={values.meta.description}
                    />
                    <span className="input-error"></span>
                  </div>
                  {values.content.map((el, idx) => {
                    return (
                      <div className="input-group mt-3" key={el._id}>
                        <div className="input-group-prepend">
                          <span className="input-group-text">Text:</span>
                        </div>
                        <input
                          onChange={handleChange}
                          className="form-control"
                          type="text"
                          name={`content.${idx}.title`}
                          value={el.title}
                        />
                        <div className="input-group-prepend">
                          <span className="input-group-text">Url:</span>
                        </div>
                        <input
                          onChange={handleChange}
                          className="form-control"
                          type="text"
                          name={`content.${idx}.url`}
                          value={el.url}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="modal-footer">
                  <Button
                    text="Change"
                    classList="default-button dark-btn"
                    htmlType="submit"
                  />
                  <Button
                    callback={closeModal}
                    classList="default-button dark-btn"
                    text="Cancel"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
