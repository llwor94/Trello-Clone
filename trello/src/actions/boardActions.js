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
  console.log(title);
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
  // let docRef = db.collection('boards').doc();
  // docRef
  //   .set({
  //     name: title,
  //     id: docRef.id,
  //   })
  //   .then(() => {
  //     dispatch({ type: BOARD_ADD_SUCCESS });
  //   })
  //   .catch(error => {
  //     console.log('Error adding document', error);
  //   });
};

export const getCurrentBoard = id => dispatch => {
  dispatch({ type: FETCH_CURRENT_BOARD });
  // axios.get(`URL/${id}`).then()

  let query = db.collection('boards').doc(id);
  query.onSnapshot(doc => {
    console.log('current board', doc.data());
    dispatch({ type: CURRENT_BOARD_FETCHED, payload: doc.data() });
    dispatch(fetchLists());
    dispatch(fetchItems());
  });
};

export const updateBoardName = newName => (dispatch, getState) => {
  dispatch({ type: UPDATE_BOARD });
  let board = getState().boardReducer.currentBoard.id;
  let boardRef = db.collection('boards').doc(board);
  boardRef.update({ name: newName }).then(() => console.log(boardRef));
};

export const getBoardsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchBoards(getState())) {
    return dispatch(fetchBoards());
  }
};

export const getBoardIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchBoard(getState())) {
    return dispatch(getCurrentBoard(id));
  }
};

const shouldFetchBoards = state => {
  const boards = state.boardReducer.boards;
  if (boards.length < 1) {
    return true;
  } else return false;
};

const shouldFetchBoard = state => {
  const board = state.boardReducer.currentBoard;
  if (!board) {
    return true;
  } else return false;
};

export const dismountCurrentBoard = () => ({
  type: DISMOUNT_CURRENT_BOARD,
});
