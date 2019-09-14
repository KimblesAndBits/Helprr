//import react and dep for this app
import React, { Component } from "react";

//import needed pages tp show image grid
import * as Pages from "./scenes";

//import main css for this project
import "./App.css";

//import material ui things
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

//import redux things
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

//get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// importing reusable modal
import Modal from "./components/Modal/Modal";

//import login form things
import FormLogin from "./components/loginForm";

// import footer
import Footer from "./components/Footer/Footer";

// import posting modal
import PostTutorial from "./components/Posting/Post";

// importing streaming modal (will be incomplete)
import Stream from "./components/Stream/Stream";

/*
this Link to make image clickable
import all things need to run the router 
*/
import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";


import Chat from "./components/Chat/chat";
class AppComponent extends Component {
  state = {
    isOpen: false
  };


  render() {
    return (
      <div className="helprr-app">
        <Link to={"/"} className="logo-nav">
          <h1
            style={{
              textAlign: "center"
            }}
          >
            Helprr
          </h1>
        </Link>

        <p
          className="subheader"
          style={{
            textAlign: "center"
          }}
        >
          tutorial live streaming & posts, created by you
        </p>

        <hr
          style={{
            margin: 30
          }}
        />

        <AppBar position="static" color="default">
          <Toolbar>
            <ul className="flex-container">
              <li className="flex-item">
                <Link to={"/"}>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                </Link>
              </li>

              <li className="flex-item">
                <button onClick={e => this.setState({ isOpen: true })}>
                  <FontAwesomeIcon icon={faVideo} size="lg" />
                </button>

                <Modal
                  isOpen={this.state.isOpen}
                  onClose={e => this.setState({ isOpen: false })}
                >
                  <Stream />
                </Modal>
              </li>

              <li className="flex-item">
                <PostTutorial />
              </li>

              <li className="flex-item">
                <Link to={"/register"}>
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </li>

            </ul>
          </Toolbar>
        </AppBar>

        <hr
          style={{
            margin: 30
          }}
        />

        <Switch>
          <Route
            path="/"
            exact
            render={({ match }) => {
              return React.cloneElement(<Pages.ImageGrid />, {
                ...this.props
              });
            }}
          />
          <Route
            path="/image-details/:id"
            exact
            render={({ match }) => {
              return React.cloneElement(
                <Pages.ImageDetails postId={match.params.id} />,
                {
                  ...this.props
                }
              );
            }}
          />
          <Route path="/register" exact component={FormLogin} />
          <Redirect from="*" to="/" />
        </Switch>
        <Chat />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(AppComponent)
);

export default App;
