import db from '../firebase'

export const FETCH_LISTS = 'FETCH_LISTS';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';

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