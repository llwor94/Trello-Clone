import { FETCH_LISTS, LIST_FETCH_SUCCESS, ADD_LIST, ADD_LIST_SUCCESS, FETCH_LIST, SINGLE_LIST_FETCHED, FETCHING_COMPLETE, DELETING_LIST, LIST_DELETED, } from '../actions/listActions';
import { NEW_ITEM_SUCCESS, ADD_ITEM, DELETE_ITEM, ITEM_DELETED } from '../actions/itemActions'
const initialState = {
  fetchingLists: false,
  fetchingListsSuccess: false,
  addingItem: false,
  itemAdded: false,
  addingList: false,
  listAdded: false,
  itemDeleted: false,
  deletingItem: false,
  fetchingSingleList: false,
  singleListFetched: false,
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
        fetchingListsSuccess: true,
        fetchingLists: false, 
        itemAdded: false,
        listAdded: false,
        itemDeleted: false,
        listDeleted: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        addingItem: true,
      }
    case NEW_ITEM_SUCCESS:
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
    case DELETE_ITEM:
      return {
        ...state,
        deletingItem: true
      }
    case ITEM_DELETED:
      return {
        ...state,
        itemDeleted: true,
        deletingItem: false
      }
    // case FETCH_LIST:
    //   return {
    //     ...state,
    //     fetchingSingleList: true,
    //   }
    // case SINGLE_LIST_FETCHED:
    //   return {
    //     ...state,
    //     fetchingSingleList: false,
    //     singleListFetched: true,
    //     currentList: {...action.payload}
    //   }
    // case FETCHING_COMPLETE:
    //   return {
    //     ...state,
    //     singleListFetched: false,
    //     lists: [
    //       ...state.lists,
    //       ...state.currentList
    //     ]
    //   }
    
    default:
      return state;
  }
}