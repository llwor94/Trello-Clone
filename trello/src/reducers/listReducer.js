import { FETCH_LISTS, LIST_FETCH_SUCCESS, ADD_LIST, ADD_LIST_SUCCESS, CLEAR_LIST, DELETING_LIST, LIST_DELETED, } from '../actions/listActions';
import {DISMOUNT_CURRENT_BOARD} from '../actions/boardActions'

const initialState = {
  fetchingLists: false,
  addingList: false,
  listAdded: false,
  deletingList: false,
  listDeleted: false,
  lists: [],
  currentList: null,
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS: 
      return {
        ...state,
        fetchingLists: true
      };
    case LIST_FETCH_SUCCESS:
      return {
        ...state,
        lists: [
          ...action.payload
        ],
        fetchingLists: false, 
        listAdded: false,
        listDeleted: false,
      };
    case ADD_LIST:
      return {
        ...state,
        addingList: true
      }
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        addingList: false,
        listAdded: true
      }
    case DELETING_LIST:
      return {
        ...state,
        deletingList: true,
      }
    case LIST_DELETED:
      return {
        ...state,
        listDeleted: true,
        deletingList: false,
      }
    case DISMOUNT_CURRENT_BOARD:
      return {
        ...state,
        lists: []
      }
    default:
      return state;
  }
}