import db from '../firebase'

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';
export const ADD_BOARD = 'ADD_BOARD';
export const BOARD_ADD_SUCCESS = 'BOARD_ADD_SUCCESS';


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
      dispatch({type: BOARD_ADD_SUCCESS})
    })
    .then(() => {
      dispatch(fetchBoards())
    })
}