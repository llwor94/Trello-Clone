import {
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOG_IN,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT,
} from '../actions/authActions';

const initialState = {
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case LOG_OUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};
