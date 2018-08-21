import db from '../firebase'

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';
export const ADD_BOARD = 'ADD_BOARD';
export const BOARD_ADD_SUCCESS = 'BOARD_ADD_SUCCESS';
export const FETCH_CURRENT_BOARD = 'FETCH_CURRENT_BOARD';
export const CURRENT_BOARD_FETCHED = 'CURRENT_BOARD_FETCHED';

export const fetchBoards = () => dispatch => {
  dispatch({ type: FETCH_BOARDS });
  db.collection('boards').get()
    .then(querySnapshot => {
      dispatch({ 
        type: BOARD_FETCH_SUCCESS,
        payload: querySnapshot.docs.map((doc) => {return {...doc.data()}})
      })
    })
}

export const addBoard = title => dispatch => {
  dispatch({ type: ADD_BOARD });
  db.collection('boards').doc(title).set({ name: title })
    .then(() => {
      dispatch({ type: BOARD_ADD_SUCCESS })
    })
    .then(() => {
      dispatch(fetchBoards())
    })
}

export const getCurrentBoard = name => dispatch => {
  let docRef = db.collection('boards').doc(name);
  dispatch({ type: FETCH_BOARDS })
  docRef.get()
    .then(doc => {
      if (doc.exists) {
        dispatch({ type: CURRENT_BOARD_FETCHED, payload: doc.data() })
      }
    })
}