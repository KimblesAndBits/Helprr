// import react
import React from "react";
import { Provider } from "react-redux";

// import render to make sure attach react to root app
import { render } from "react-dom";

// import the main entry point for this application
import App from "./App/App";

// get the inital state
import store, { history } from "./store";

// import browser router for our main app
import { ConnectedRouter } from "react-router-redux";

// all theme imports for login/sign up page
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faLinkedinIn, faGoogle);

// render it to the dom element
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app-root")
);
