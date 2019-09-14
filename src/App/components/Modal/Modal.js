import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(13, 1, 61, 0.82)",
      padding: "50px",
      zIndex: "99999"
    };

    let modal = (
      <div className="modalStyle">
        <div style={backdropStyle}>
          <button
            className="modalCloseButtonStyles"
            onClick={this.props.onClose}
          >
            ×
          </button>

          <h1 className="headerModal">Helprr</h1>

          <div className="modalBackgroundColor">
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );

    if (!this.props.isOpen) {
      modal = null;
    }
    return <div>{modal}</div>;
  }
}

export default Modal;
