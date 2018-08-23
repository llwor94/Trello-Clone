import db from '../firebase'
import firebase from 'firebase/app';

export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEMS';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ITEM_FETCHED = 'ITEMS_FETCHED';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'NEW_ITEM_SUCCESS'
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEM_DELETED = 'ITEM_DELETED';
export const MOVE_ITEM = 'MOVE_ITEM';
export const ITEM_MOVED = 'ITEM_MOVED';

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ITEMS });
  let board = getState().boardReducer.currentBoard.id
  console.log(board)
  db.collection('listItems').where('board', '==', board.toString())
    .orderBy('timestamp')
    .onSnapshot(querySnapshot => {
      dispatch({
        type: ITEMS_FETCHED,
        payload: querySnapshot.docs.map((doc) => {
          console.log(doc.data())
          return {...doc.data()}})
      })
    })
}

export const moveItem = (item, list) => dispatch => {
  dispatch({ type: MOVE_ITEM });
  let itemRef = db.collection('listItems').doc(item.id)
  itemRef.update({list: list.id })
    .then(() => {
      dispatch({ type: ITEM_MOVED })
    })
}

export const addItem = (list, item) => (dispatch, getState)  => {
  dispatch({ type: ADD_ITEM });
  console.log(list, item)
  let board = getState().boardReducer.currentBoard.id;
  console.log(board)
  let itemRef = db.collection('listItems').doc();
  itemRef 
    .set({
      id: itemRef.id,
      name: item,
      board: board,
      list: list,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  .then(() => {
    console.log(itemRef)
    dispatch({ type: ADD_ITEM_SUCCESS })
  })
}

export const addTag = (item, tags) => {
  
}

export const deleteItem = id => dispatch => {
  db.collection('listItems').doc(id).delete()
    .then(() => {
      dispatch({ type: ITEM_DELETED })
    })
}