import db from '../firebase'
import firebase from 'firebase/app';

export const FETCH_LISTS = 'FETCH_LISTS';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export  const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'

export const fetchLists = name => dispatch => {
  dispatch({ type: FETCH_LISTS });
  db.collection('lists').where('board', '==', name)
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