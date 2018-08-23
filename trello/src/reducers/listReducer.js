import { FETCH_LISTS, LIST_FETCH_SUCCESS, ADD_LIST, ADD_LIST_SUCCESS, CLEAR_LIST, FETCH_LIST, SINGLE_LIST_FETCHED, FETCHING_COMPLETE, DELETING_LIST, LIST_DELETED, } from '../actions/listActions';
import { NEW_ITEM_SUCCESS, ADD_ITEM, DELETE_ITEM, ITEM_DELETED } from '../actions/itemActions'
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
    case CLEAR_LIST:
      return {
        ...state,
        lists: [],
      }
    
    default:
      return state;
  }
}