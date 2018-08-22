import db from '../firebase'
import firebase from 'firebase/app';

export const FETCH_LISTS = 'FETCH_LISTS';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_LIST = 'ADD_LIST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS'
export const FETCH_LIST = 'FETCH_LIST';
export const SINGLE_LIST_FETCHED = 'SINGLE_LIST_FETCHED';
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE';
export const DELETING_LIST = 'DELETING_LIST';
export const LIST_DELETED = 'LIST_DELETED';

export const fetchLists = () => (dispatch, getState) => {
  let board = getState().boardReducer.currentBoard
  dispatch({ type: FETCH_LISTS });
  db.collection('lists').where('board', '==', board)
    .orderBy('timestamp')
    .get()
    .then(querySnapshot => {
      dispatch({
        type: LIST_FETCH_SUCCESS,
        payload: querySnapshot.docs.map((doc) => {return {...doc.data()}})
      })
    })
}

export const addItem = (item, list) => dispatch  => {
  const listRef = db.collection('lists').doc(list.name);
  dispatch({ type: ADD_ITEM });
  listRef.update({
    items: firebase.firestore.FieldValue.arrayUnion(item)
  })
  .then(() => {
    console.log(listRef)
    dispatch({ type: ADD_ITEM_SUCCESS })
  })
}

export const addList = name => (dispatch, getState) => {
  let board = getState().boardReducer.currentBoard
  dispatch({ type: ADD_LIST });
  console.log(name, board)
  db.collection('lists').doc(name).set ({
    name: name, 
    board: board, 
    timestamp: firebase.firestore.FieldValue.serverTimestamp()})
    .then(() => {
      dispatch({ type: ADD_LIST_SUCCESS })
    })
    .then(() => {
      dispatch(fetchLists(board))
    })
}
 
export const fetchList = name => dispatch => {
  let docRef = db.collection('lists').doc(name);
  dispatch({ type: FETCH_LIST })
  docRef.get()
    .then(doc => {
      if (doc.exists) {
        dispatch({ type: SINGLE_LIST_FETCHED, payload: doc.data() })
      }
    })
    .then(() => {
      dispatch({ type: FETCHING_COMPLETE })
    })
}

export const deleteList = name => (dispatch, getState) => {
  let board = getState().boardReducer.currentBoard;
  dispatch({ type: DELETING_LIST})
  db.collection('lists').doc(name).delete()
    .then(() => {
      dispatch({ type: LIST_DELETED })
    })
    .then(() => {
      dispatch((fetchLists(board)))
    })
}