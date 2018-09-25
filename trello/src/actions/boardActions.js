import db from '../firebase';
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
  axios.get(URL).then(response => {
    console.log(response);
    dispatch({
      type: BOARD_FETCH_SUCCESS,
      payload: response.data,
    });
  });
};

export const addBoard = title => dispatch => {
  dispatch({ type: ADD_BOARD });
  axios
    .post(URL, { title })
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
  axios.get(`${URL}/${id}`).then(response => {
    dispatch({
      type: CURRENT_BOARD_FETCHED,
      payload: response.data,
    });
    dispatch(fetchLists());
    dispatch(fetchItems());
  });
};

export const updateBoardName = title => (dispatch, getState) => {
  dispatch({ type: UPDATE_BOARD });
  let board = getState().boardReducer.currentBoard.id;
  axios.put(`${URL}/${board}`, { title }).then(response => {
    dispatch({
      type: UPDATE_BOARD_SUCCESS,
      payload: title,
    });
  });
  // let boardRef = db.collection('boards').doc(board);
  // boardRef.update({ name: newName }).then(() => console.log(boardRef));
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
  // const lists = state.listReducer.lists;
  // const items = state.itemReducer.items;
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
