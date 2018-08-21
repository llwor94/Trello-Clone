import { FETCH_LISTS, LIST_FETCH_SUCCESS } from '../actions/listActions';

const initialState = {
  fetchingLists: false,
  fetchingListsSuccess: false,
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
      };
    default:
      return state;
  }
}