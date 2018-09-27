import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { boardReducer } from '../reducers/boardReducer';
import { listReducer } from '../reducers/listReducer';
import { itemReducer } from '../reducers/itemReducer';
import { authReducer } from '../reducers/authReducer';

export default () => {
  const store = createStore(
    combineReducers({
      boardReducer,
      listReducer,
      itemReducer,
      authReducer,
    }),
    applyMiddleware(thunk, logger),
  );
  return store;
};
