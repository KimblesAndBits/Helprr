import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';

import posts from "./posts";
import comments from "./comments";

const rootReducer = combineReducers({
  posts,
  authentication,
  registration,
  alert,
  comments,
  routing: routerReducer
});

export default rootReducer;
