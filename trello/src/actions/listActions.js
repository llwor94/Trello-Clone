import db from '../firebase';
import firebase from 'firebase/app';
import axios from 'axios';

export const FETCH_LISTS = 'FETCH_LISTS';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const DELETING_LIST = 'DELETING_LIST';
export const LIST_DELETED = 'LIST_DELETED';
export const CLEAR_LIST = 'CLEAR_LIST';
export const FETCH_ALL_LISTS = 'FETCH_ALL_LISTS';
export const FETCH_ALL_LISTS_SUCCESS = 'FETCH_ALL_LISTS_SUCCESS';

let URL = 'http://localhost:3400/api/lists';

export const fetchLists = () => (dispatch, getState) => {
  dispatch({ type: FETCH_LISTS });
  let board = getState().boardReducer.currentBoard.id;

  axios({
    method: 'GET',
    url: URL,
    params: {
      board,
    },
  }).then(response => {
    dispatch({
      type: LIST_FETCH_SUCCESS,
      payload: response.data,
    });
  });
};

export const fetchAllLists = () => dispatch => {
  dispatch({ type: FETCH_ALL_LISTS });
  db.collection('lists').onSnapshot(querySnapshot => {
    dispatch({
      type: FETCH_ALL_LISTS_SUCCESS,
      payload: querySnapshot.docs.map(doc => {
        return { ...doc.data() };
      }),
    });
  });
};

export const addList = title => (dispatch, getState) => {
  dispatch({ type: ADD_LIST });
  let board = getState().boardReducer.currentBoard.id;

  axios({
    method: 'POST',
    url: URL,
    params: {
      board,
    },
    data: {
      title,
    },
  }).then(data => {
    dispatch({
      type: ADD_LIST_SUCCESS,
    });
    dispatch(fetchLists());
  });
  // let listRef = db.collection('lists').doc();
  // listRef
  //   .set({
  //     id: listRef.id,
  //     name: name,
  //     board: board,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   })
  //   .then(() => {
  //     dispatch({ type: ADD_LIST_SUCCESS });
  //   });
};

export const deleteList = id => dispatch => {
  dispatch({ type: DELETING_LIST });
  db.collection('lists')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: LIST_DELETED });
    });
};

export const clearList = () => ({
  type: CLEAR_LIST,
});

export const getListsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchLists(getState())) {
    return dispatch(fetchLists());
  }
};

const shouldFetchLists = state => {
  const lists = state.listReducer.fetchingLists;
  if (!lists.length) {
    return true;
  } else return false;
};

export const listByBoard = (state, board) => {
  return state.listReducer.lists.find(list => list.board === board.id);
};
