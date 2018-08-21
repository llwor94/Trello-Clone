import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { boardReducer } from '../reducers/boardReducer';
import { listReducer } from '../reducers/listReducer';

export default () => {
  const store = createStore(
    combineReducers({
      boardReducer,
      listReducer
    }),
    applyMiddleware(logger, thunk)
  )
  return store;
}