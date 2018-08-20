import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { boardReducer } from '../reducers/boardReducer'

export default () => {
  const store = createStore(
    combineReducers({
      boardReducer
    }),
    applyMiddleware(logger, thunk)
  )
  return store;
}