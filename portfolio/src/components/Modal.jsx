import React, { Component } from "react";

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {

    return (
      <>

        <button
          className="btn btn-primary"
          onClick={this.openModal}
        >
          Open Modal
        </button>

        <div className={`modal ${this.state.isOpen ? "active" : ""}`}>

          <div className="modal-content">

            <div className="modal-header">

              <h2 className="modal-title">
                My Modal
              </h2>

              <button
                className="modal-close"
                onClick={this.closeModal}
              >
                ×
              </button>

            </div>

            <div className="modal-body">

              This is the modal content.

            </div>

          </div>

        </div>

      </>
    );
  }
}

export default Modal;