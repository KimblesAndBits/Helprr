import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('helprrUser'));
const initialState = user ? { loggedIn: true, user } : {user: {}};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return state;
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        user: {}
      };
    default:
      return state
  }
}