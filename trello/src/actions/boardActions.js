import { fetchLists } from './listActions';
import { fetchItems } from './itemActions';
import axios from 'axios';

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';
export const ADD_BOARD = 'ADD_BOARD';
export const BOARD_ADD_SUCCESS = 'BOARD_ADD_SUCCESS';
export const FETCH_CURRENT_BOARD = 'FETCH_CURRENT_BOARD';
export const CURRENT_BOARD_FETCHED = 'CURRENT_BOARD_FETCHED';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS';
export const DISMOUNT_CURRENT_BOARD = 'DISMOUNT_CURRENT_BOARD';
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE';

let URL = 'http://localhost:3400/api/boards';

export const fetchBoards = () => dispatch => {
  dispatch({ type: FETCH_BOARDS });
  axios({
    method: 'GET',
    url: URL,
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }).then(response => {
    console.log(response);
    dispatch({
      type: BOARD_FETCH_SUCCESS,
      payload: response.data,
    });
  });
};

export const addBoard = title => dispatch => {
  dispatch({ type: ADD_BOARD });
  axios({
    method: 'PUT',
    url: URL,
    data: { title },
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
    .then(response => {
      let id = response.data[0];
      dispatch({
        type: BOARD_ADD_SUCCESS,
        payload: { id, title },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getCurrentBoard = id => dispatch => {
  dispatch({ type: FETCH_CURRENT_BOARD });
  axios({
    method: 'GET',
    url: `${URL}/${id}`,
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }).then(response => {
    dispatch({
      type: CURRENT_BOARD_FETCHED,
      payload: response.data,
    });
    dispatch(fetchLists());
    dispatch(fetchItems());
    dispatch(fetchBoards());
  });
};

export const updateBoardName = title => (dispatch, getState) => {
  dispatch({ type: UPDATE_BOARD });
  let board = getState().boardReducer.currentBoard.id;
  axios({
    method: 'PUT',
    url: `${URL}/${board}`,
    data: { title },
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }).then(response => {
    dispatch({
      type: UPDATE_BOARD_SUCCESS,
      payload: title,
    });
  });
};

export const getBoardsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchBoards(getState())) {
    return dispatch(fetchBoards());
  }
};

export const getDataIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchData(getState())) {
    return dispatch(getCurrentBoard(id));
  }
};

const shouldFetchBoards = state => {
  const boards = state.boardReducer.boards;
  if (boards.length < 1) {
    return true;
  } else return false;
};

const shouldFetchData = state => {
  const board = state.boardReducer.currentBoard;
  if (!board.title) {
    return true;
  } else return false;
};

export const dismountCurrentBoard = () => ({
  type: DISMOUNT_CURRENT_BOARD,
});
