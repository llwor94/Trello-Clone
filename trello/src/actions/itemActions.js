import db from '../firebase';
import axios from 'axios';

export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEM';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEMS_FETCHED = 'ITEMS_FETCHED';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'NEW_ITEM_SUCCESS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ITEM_DELETED = 'ITEM_DELETED';
export const MOVE_ITEM = 'MOVE_ITEM';
export const ITEM_MOVED = 'ITEM_MOVED';
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
export const ADD_DESCRIPTION_SUCCESS = 'ADD_DESCRIPTION_SUCCESS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const ITEM_UPDATED = 'ITEM_UPDATED';
export const UPDATE_NAME = 'UPDATE_NAME';
export const NAME_UPDATED = 'NAME_UPDATED';

let URL = 'http://localhost:3400/api/cards';

export const fetchItems = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ITEMS });
  let board = getState().boardReducer.currentBoard.id;

  axios({
    method: 'GET',
    url: URL,
    params: {
      board,
    },
  }).then(response => {
    dispatch({
      type: ITEMS_FETCHED,
      payload: response.data,
    });
  });
};

export const fetchCurrentItem = id => dispatch => {
  dispatch({ type: FETCH_LIST_ITEM });
  axios.get(`${URL}/${id}`).then(response => {
    dispatch({
      type: ITEM_FETCHED,
      payload: response.data,
    });
  });
};

export const clearCurrentItem = () => ({
  type: DESELECT_ITEM,
});

export const moveItemToNewList = (item, list) => dispatch => {
  dispatch({ type: MOVE_ITEM });
  let itemRef = db.collection('listItems').doc(item);
  itemRef.update({ list: list }).then(() => {
    dispatch({ type: ITEM_MOVED });
  });
};

export const updateItem = (item, list, board) => dispatch => {
  console.log(item, list, board);
  dispatch({ type: UPDATE_ITEM });
  let itemRef = db.collection('listItems').doc(item);
  itemRef.update({ list: list.id, board: board.id }).then(() => {
    dispatch({ type: ITEM_UPDATED });
  });
};

export const updateName = (id, title) => dispatch => {
  dispatch({ type: UPDATE_NAME });
  axios.put(`${URL}/${id}`, { title }).then(response => {
    dispatch({ type: NAME_UPDATED, payload: title });
  });
  // let itemRef = db.collection('listItems').doc(item.id);
  // itemRef.update({ name: name }).then(() => {
  //   dispatch({ type: NAME_UPDATED });
  // });
};

export const addItem = (list, title) => dispatch => {
  dispatch({ type: ADD_ITEM });
  axios({
    method: 'POST',
    url: URL,
    params: {
      list,
    },
    data: {
      title,
    },
  }).then(() => {
    dispatch({ type: ADD_ITEM_SUCCESS });
    dispatch(fetchItems());
  });
};

export const addDescription = (id, description) => dispatch => {
  dispatch({ type: ADD_DESCRIPTION });
  let itemRef = db.collection('listItems').doc(id);
  itemRef
    .update({ description: description })
    .then(() => {
      dispatch({ type: ADD_DESCRIPTION_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addTag = (item, tags) => {};

export const deleteItem = id => dispatch => {
  axios.delete(`${URL}/${id}`).then(res => {
    dispatch({
      type: ITEM_DELETED,
      payload: id,
    });
  });
  // db.collection('listItems')
  //   .doc(id)
  //   .delete()
  //   .then(() => {
  //     dispatch({ type: ITEM_DELETED });
  //   });
};
