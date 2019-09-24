import { userConstants } from '../constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return { registering: false };
    case userConstants.REGISTER_FAILURE:
      return { failure: "We're sorry, something went wrong while trying to initialize your account."};
    default:
      return state
  }
}