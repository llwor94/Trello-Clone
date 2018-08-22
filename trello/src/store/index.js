import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { boardReducer } from '../reducers/boardReducer';
import { listReducer } from '../reducers/listReducer';
import { itemReducer } from '../reducers/itemReducer'

export default () => {
  const store = createStore(
    combineReducers({
      boardReducer,
      listReducer,
      itemReducer
    }),
    applyMiddleware(logger, thunk)
  )
  return store;
}