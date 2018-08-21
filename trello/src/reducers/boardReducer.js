import { FETCH_BOARDS, BOARD_FETCH_SUCCESS, ADD_BOARD, BOARD_ADD_SUCCESS, FETCH_CURRENT_BOARD, CURRENT_BOARD_FETCHED } from '../actions/boardActions'

const initialState = {
  fetchingBoards: false,
  fetchingBoardsSuccess: false,
  addingBoard: false,
  addingBoardSuccess: false,
  fetchingCurrentBoard: false,
  fetchingCurrentBoardSuccess: false,
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
      };
    case ADD_BOARD:
      return {
        ...state,
        addingBoard: true
      };
    case BOARD_ADD_SUCCESS:
      return {
        ...state,
        addingBoard: false,
        addingBoardSuccess: true
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
        fetchingCurrentBoardSuccess: true,
        currentBoard: action.payload.name
      }
    default: 
      return state;
  }
}