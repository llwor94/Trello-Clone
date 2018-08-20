import db from '../firebase'

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';


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