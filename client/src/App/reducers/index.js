import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

import posts from "./posts";

const rootReducer = combineReducers({
  posts,
  authentication,
  registration,
  users,
  alert,
  routing: routerReducer
});

export default rootReducer;
