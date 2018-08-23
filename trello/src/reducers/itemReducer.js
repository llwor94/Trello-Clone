import {FETCH_LIST_ITEM, DESELECT_ITEM, FETCH_ITEMS, ITEMS_FETCHED, MOVE_ITEM, ITEM_MOVED} from '../actions/itemActions';
import {DISMOUNT_CURRENT_BOARD} from '../actions/boardActions'

const initialState = {
  fetchingItems: false,
  fetchingItem: false,
  addingItem: false,
  itemAddComplete: false,
  movingItem: false,
  items: [],
  currentItem: null,
}

export const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LIST_ITEM:
      return {
        ...state,
        fetchingItem: true,
      };
    case DESELECT_ITEM:
      return {
        ...state,
        itemFetched: false,
        currentItem: null
      }
    case FETCH_ITEMS:
      return {
        ...state,
        fetchingItems: true,
      }
    case ITEMS_FETCHED:
      return {
        ...state,
        fetchingItems: false,
        items: [
          ...action.payload
        ]
      }
    case DISMOUNT_CURRENT_BOARD:
      return {
        ...state,
        items: []
      }
    case MOVE_ITEM:
      return {
        ...state,
        movingItem: true
      }
    case MOVE_ITEM:
      return {
        ...state,
        movingItem: false
      }
    default: 
      return state;
  }
}

export const filteredItems = (state, list) => {
  return state.itemReducer.items.filter(item => item.list === list.id )
}

export const listByItem = (state, item) => {
  return state.listReducer.lists.find(list => list.id === item.list)
}