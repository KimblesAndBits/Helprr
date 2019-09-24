import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers";

export const history = createHistory();
const loggerMiddleware = createLogger();

/**
 * Create the inital value for your store
 */

const initialState = {};

const enhancers = [];
const middleware = [routerMiddleware(history), thunkMiddleware, loggerMiddleware];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
