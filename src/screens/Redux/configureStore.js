import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import counterReducer from './Basics/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer
});

const configureStore = () => {
  const middlewares = [createLogger()];

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;
