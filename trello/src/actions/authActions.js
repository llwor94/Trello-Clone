import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

let URL = 'http://localhost:3400/api/auth';

export const register = (username, password) => dispatch => {
  dispatch({ type: SIGN_UP });

  axios.post(`${URL}/register`, { username, password }).then(response => {
    console.log(response.data);
    if (!response.data) {
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: SIGN_UP_FAILURE, payload: response.data });
    }
  });
};

export const login = (username, password) => dispatch => {
  dispatch({ type: LOG_IN });
  console.log(username, password);
  axios.post(`${URL}/login`, { username, password }).then(response => {
    if (response.data) {
      dispatch({ type: LOG_IN_SUCCESS, payload: response.data });
      localStorage.setItem('token', response.data.token);
    } else {
      dispatch({ type: LOG_IN_FAILURE, payload: response.data });
    }
  });
};

export const logout = () => ({
  type: LOG_OUT,
});
