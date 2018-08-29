import db from '../firebase'
import firebase from 'firebase/app';

export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'NEW_ITEM_SUCCESS'
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEM_DELETED = 'ITEM_DELETED';
export const MOVE_ITEM = 'MOVE_ITEM';
export const ITEM_MOVED = 'ITEM_MOVED';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_DESCRIPTION_SUCCESS = 'ADD_DESCRIPTION_SUCCESS';

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ITEMS });
  let board = getState().boardReducer.currentBoard.id
  db.collection('listItems').where('board', '==', board.toString())
    .orderBy('timestamp')
    .onSnapshot(querySnapshot => {
      dispatch({
        type: ITEMS_FETCHED,
        payload: querySnapshot.docs.map((doc) => {
          return {...doc.data()}})
      })
    })
}

export const fetchCurrentItem = id => dispatch => {
  console.log(id)
  dispatch({ type: FETCH_LIST_ITEM });
  let itemRef = db.collection('listItems').doc(id);
  itemRef.get()
    .then(doc => {
      if (doc.exists) {
        dispatch({ 
          type: ITEM_FETCHED,
          payload: doc.data()
         })
      }
    })
}

export const clearCurrentItem = () => ({
  type: DESELECT_ITEM
})

export const moveItem = (item, list) => dispatch => {
  dispatch({ type: MOVE_ITEM });
  let itemRef = db.collection('listItems').doc(item)
  itemRef.update({list: list })
    .then(() => {
      dispatch({ type: ITEM_MOVED })
    })
}

export const addItem = (list, item) => (dispatch, getState)  => {
  dispatch({ type: ADD_ITEM });
  let board = getState().boardReducer.currentBoard.id;
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
    dispatch({ type: ADD_ITEM_SUCCESS })
  })
}

export const addDescription = (id, description) => dispatch => {
  dispatch({ type: ADD_DESCRIPTION });
  let itemRef = db.collection('listItems').doc(id);
  itemRef.update({ description: description })
    .then(() => {
      dispatch({ type: ADD_DESCRIPTION_SUCCESS })
    })
    .catch(err => {
      console.log(err);
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