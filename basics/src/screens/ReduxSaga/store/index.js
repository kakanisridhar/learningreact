import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer from '../rootReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);