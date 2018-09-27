import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

let URL = 'http://localhost:3400/api/auth';

export const signUp = (username, password) => dispatch => {
  dispatch({ type: SIGN_UP });
  axios.post(`${URL}/signup`, { username, password }).then(response => {
    console.log(response);
    if (!response.data) {
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: SIGN_UP_FAILURE, payload: response.data });
    }
  });
};
