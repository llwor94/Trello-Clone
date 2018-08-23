import db from '../firebase'
import { fetchLists } from './listActions'

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';
export const ADD_BOARD = 'ADD_BOARD';
export const BOARD_ADD_SUCCESS = 'BOARD_ADD_SUCCESS';
export const FETCH_CURRENT_BOARD = 'FETCH_CURRENT_BOARD';
export const CURRENT_BOARD_FETCHED = 'CURRENT_BOARD_FETCHED';
export const DISMOUNT_CURRENT_BOARD = 'DISMOUNT_CURRENT_BOARD'

export const fetchBoards = () => dispatch => {
  dispatch({ type: FETCH_BOARDS });
  let query = db.collection('boards');
    query.onSnapshot(querySnapshot => {
      console.log('fetched boards', querySnapshot) 
      dispatch({
        type: BOARD_FETCH_SUCCESS,
        payload: querySnapshot.docs.map((doc) => {return {...doc.data()}})
      })
    })
}

export const addBoard = title => dispatch => {
  dispatch({ type: ADD_BOARD });
  let docRef = db.collection('boards').doc();
  docRef
    .set({ 
    name: title,
    id: docRef.id
    })
    .then(() => {
      dispatch({ type: BOARD_ADD_SUCCESS })
    })
    .catch(error => {
      console.log('Error adding document', error)
    })
}

export const getCurrentBoard = id => dispatch => { 
  dispatch({ type: FETCH_CURRENT_BOARD })
  let docRef = db.collection('boards').doc(id);
  docRef.get()
    .then(doc => {
      if (doc.exists) {
        console.log('current board', doc.id)
        dispatch({ type: CURRENT_BOARD_FETCHED, payload: doc.data() })
      }
    })
    .then(() => dispatch(fetchLists()))
    .catch(error => {
      console.log('Error getting documents', error)
    })
}

// export const updateBoardName = newName => (dispatch, getState) => {
//   dispatch({ type: UPDATE_BOARD })
//   let board = getState().boardReducer.currentBoard;
//   let boardRef = db.collection('boards').doc(board);
//   boardRef.get()
//   .then(doc => {
//     let data = doc.data();
//     db.collection('lists').doc(newName)
//   }) }

export const getBoardIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchBoard(getState())) {
    return dispatch(getCurrentBoard(id))
  }
}

const shouldFetchBoard = (state) => {
  const board = state.boardReducer.currentBoard;
  if (!board) {
    return true;
  } else return false
}

export const dismountCurrentBoard = () => ({
   type: DISMOUNT_CURRENT_BOARD 
})