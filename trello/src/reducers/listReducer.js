import { FETCH_LISTS, LIST_FETCH_SUCCESS, ADD_ITEM_SUCCESS, ADD_ITEM, ADD_LIST, ADD_LIST_SUCCESS } from '../actions/listActions';

const initialState = {
  fetchingLists: false,
  fetchingListsSuccess: false,
  addingItem: false,
  itemAdded: false,
  addingList: false,
  listAdded: false,
  lists: []
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
        fetchingListsSuccess: true,
        fetchingLists: false, 
        itemAdded: false,
        listAdded: false
      };
    case ADD_ITEM:
      return {
        ...state,
        addingItem: true,
      }
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        addingItem: false,
        itemAdded: true
      }
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
    default:
      return state;
  }
}