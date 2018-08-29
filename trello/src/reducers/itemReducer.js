import {FETCH_LIST_ITEM, DESELECT_ITEM, FETCH_ITEMS, ITEMS_FETCHED, MOVE_ITEM, ITEM_MOVED, ITEM_FETCHED, ADD_DESCRIPTION, ADD_DESCRIPTION_SUCCESS } from '../actions/itemActions';
import {DISMOUNT_CURRENT_BOARD} from '../actions/boardActions'

const initialState = {
  fetchingItems: false,
  fetchingItem: false,
  addingItem: false,
  itemAddComplete: false,
  movingItem: false,
  addingDescription: false,
  items: [],
  currentItem: {name: ''},
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
        currentItem: action.payload
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
    case DESELECT_ITEM:
      return {
        ...state,
        currentItem: {name: ''}
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
    case ITEM_MOVED:
      return {
        ...state,
        movingItem: false
      }
    case ADD_DESCRIPTION:
      return {
        ...state,
        addingDescription: true
      }
    case ADD_DESCRIPTION_SUCCESS:
      return {
        ...state,
        addingDescription: false
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

export const getCurrentItem = (state, id) => {
  return state.itemReducer.items.find(item => item.id === id)
}