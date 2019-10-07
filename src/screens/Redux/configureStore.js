import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import counter from './reducers';

const configureStore = () => {
  const middlewares = [createLogger()];

  return createStore(counter, applyMiddleware(...middlewares));
};

export default configureStore;
