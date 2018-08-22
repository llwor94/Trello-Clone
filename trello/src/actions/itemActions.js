import db from '../firebase'
import firebase from 'firebase/app';
import { fetchLists } from '../actions/listActions'

export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEMS';
export const ITEM_FETCHED = 'ITEMS_FETCHED';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const NEW_ITEM_SUCCESS = 'NEW_ITEM_SUCCESS'

export const fetchItem = (list, item) => (dispatch, getState) => {
  let board = getState().boardReducer.currentBoard;
  dispatch({ type: FETCH_LIST_ITEM });
  db.collection('listItems')
    .where('board', '==', board)
    .where('list', '==', list)
    .where('name', '==', item)
    .get()
    .then(querySnapshot => {
      dispatch({
        type: ITEM_FETCHED,
        payload: querySnapshot.docs.map((doc) => doc.data())
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
    dispatch(createItem(item, list))
  })
}

export const createItem = (item, list) => (dispatch, getState) => {
  let board = getState().boardReducer.currentBoard;
  dispatch({ type: CREATE_ITEM });
  db.collection('listItems').doc(item).set({
    name: item,
    board: board,
    list: list,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    dispatch({ type: NEW_ITEM_SUCCESS })
  })
  .then(() => {
    dispatch(fetchLists())
  })
}

export const deselectItem = () => ({
  type: DESELECT_ITEM
})