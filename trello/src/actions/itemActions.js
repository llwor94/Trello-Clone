import db from '../firebase'
import firebase from 'firebase/app';
import { fetchLists } from '../actions/listActions'

export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEMS';
export const ITEM_FETCHED = 'ITEMS_FETCHED';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const NEW_ITEM_SUCCESS = 'NEW_ITEM_SUCCESS'
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEM_DELETED = 'ITEM_DELETED';

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
    list: list.name,
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

export const deleteItem = (item, list) => dispatch => {
  const listRef = db.collection('lists').doc(list);
  dispatch({ type: DELETE_ITEM });
  listRef.update({
    items: firebase.firestore.FieldValue.arrayRemove(item)
  })
  .then(() => {
    dispatch((removeItem(item)))
  })
}

export const removeItem = item => dispatch => {
  db.collection('listItems').doc(item).delete()
    .then(() => {
      dispatch({ type: ITEM_DELETED })
    })
    .then(() => {
      dispatch((fetchLists()))
    })
}