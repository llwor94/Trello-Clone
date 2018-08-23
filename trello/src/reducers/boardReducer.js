import { FETCH_BOARDS, BOARD_FETCH_SUCCESS, ADD_BOARD, BOARD_ADD_SUCCESS, FETCH_CURRENT_BOARD, CURRENT_BOARD_FETCHED, DISMOUNT_CURRENT_BOARD } from '../actions/boardActions'

const initialState = {
  fetchingBoards: false,
  addingBoard: false,
  fetchingCurrentBoard: false,
  boards: [],
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
      }
    case ADD_BOARD:
      return {
        ...state,
        addingBoard: true
      };
    case BOARD_ADD_SUCCESS:
      return {
        ...state,
        addingBoard: false,
      };
    case FETCH_CURRENT_BOARD:
      return {
        ...state,
        fetchingCurrentBoard: true
      };
    case CURRENT_BOARD_FETCHED:
      return {
        ...state,
        fetchingCurrentBoard: false,
        currentBoard: action.payload
      }
    case DISMOUNT_CURRENT_BOARD:
      return {
        ...state,
        currentBoard: null
      }
    default: 
      return state;
  }
}