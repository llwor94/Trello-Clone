import {FETCH_LIST_ITEM, ITEM_FETCHED, DESELECT_ITEM, ADD_ITEM, CREATE_ITEM, NEW_ITEM_SUCCESS} from '../actions/itemActions';

const initialState = {
  fetchingItem: false,
  itemFetched: false,
  addingItem: false,
  itemAddComplete: false,
  currentItem: null,
}

export const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LIST_ITEM:
      return {
        ...state,
        fetchingItem: true,
      };
    case ITEM_FETCHED:
      return {
        ...state,
        fetchingItem: false,
        itemFetched: true,
        currentItem: action.payload[0]
      }
    case DESELECT_ITEM:
      return {
        ...state,
        itemFetched: false,
        currentItem: null
      }
    //   case ADD_ITEM:
    //   return {
    //      ...state,
    //     addingItem: true,
    //   }
    // case ADD_ITEM_SUCCESS:
    //   return {
    //     ...state,
    //     addingItem: false,
    //     itemAdded: true
    //   }
    default: 
      return state;
  }
}