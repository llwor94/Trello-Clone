import { FETCH_BOARDS, BOARD_FETCH_SUCCESS } from '../actions/boardActions'

const initialState = {
  fetchingBoards: false,
  fetchingBoardsSuccess: false,
  addingBoard: false,
  addingBoardSuccess: false,
  boards: [],
  error: null,
  currentBoard: null
}

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return {
        ...state,
        fetchingBoards: true
      };
    case BOARD_FETCH_SUCCESS:
      return {
        ...state,
        boards: [
          ...action.payload
        ],
        fetchingBoards: false,
        fetchingBoardsSuccess: true
      }
    default: 
      return state;
  }
}