import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalContext = React.createContext();
const Consumer = ModalContext.Consumer;

class Provider extends React.Component {
  showModal = (content, props = {}) => {
    this.setState({
      content,
      props
    });
  };

  hideModal = () =>
    this.setState({
      content: null,
      props: {}
    });

  state = {
    content: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal
  };

  render() {
    const ModalContent = this.state.content;
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
        {ModalContent ? <Modal content={ModalContent} /> : ""}
      </ModalContext.Provider>
    );
  }
}

const Modal = props => {
  const Content = props.content;
  return (
    <div className="modal">
      <div className="modal-content">
        <Content />
      </div>
    </div>
  );
};

const CloseButton = () => (
  <Consumer>
    {({ hideModal }) => <button onClick={hideModal}>Close It</button>}
  </Consumer>
);

const TextModalContent = () => (
  <div>
    <h1>Text modal</h1>
    <p>Some next here !</p>
    <CloseButton />
  </div>
);

const User = () => (
  <Provider>
    <div>
      <h1>Modal Demo</h1>
      <Consumer>
        {({ showModal }) => [
          <div onClick={() => showModal(TextModalContent)}>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </div>
        ]}
      </Consumer>
    </div>
  </Provider>
);

export default User;
