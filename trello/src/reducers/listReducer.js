import {
  FETCH_LISTS,
  LIST_FETCH_SUCCESS,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  CLEAR_LIST,
  DELETING_LIST,
  LIST_DELETED,
  FETCH_ALL_LISTS,
  FETCH_ALL_LISTS_SUCCESS,
} from '../actions/listActions';
import { DISMOUNT_CURRENT_BOARD } from '../actions/boardActions';

const initialState = {
  fetchingLists: false,
  fetchingAllLists: false,
  addingList: false,
  listAdded: false,
  deletingList: false,
  listDeleted: false,
  lists: [],
  allLists: [],
  currentList: null,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        fetchingLists: true,
      };
    case LIST_FETCH_SUCCESS:
      return {
        ...state,
        lists: [...action.payload],
        fetchingLists: false,
        listAdded: false,
        listDeleted: false,
      };
    case ADD_LIST:
      return {
        ...state,
        addingList: true,
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        addingList: false,
        listAdded: true,
      };
    case DELETING_LIST:
      return {
        ...state,
        deletingList: true,
      };
    case LIST_DELETED:
      return {
        ...state,
        listDeleted: true,
        deletingList: false,
        lists: state.lists.filter(list => list.id !== action.payload),
      };
    case DISMOUNT_CURRENT_BOARD:
      return {
        ...state,
        lists: [],
      };
    case FETCH_ALL_LISTS:
      return {
        ...state,
        fetchingAllLists: true,
      };
    case FETCH_ALL_LISTS_SUCCESS:
      return {
        ...state,
        fetchingAllLists: false,
        allLists: [...action.payload],
      };
    default:
      return state;
  }
};
