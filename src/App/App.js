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
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import login form things
import FormLogin from "./components/loginForm";

// import footer
import Footer from "./components/Footer/Footer";

/*
this Link to make image clickable
import all things need to run the router
 */

import { Route, Link, Redirect, Switch, withRouter } from "react-router-dom";

class AppComponent extends Component {
  render() {
    return (
      <div className="reduxstagram-app">
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
                <FontAwesomeIcon icon={faUpload} size="lg" />
              </li>

              <li className="flex-item">
                <FontAwesomeIcon icon={faPen} size="lg" />
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
