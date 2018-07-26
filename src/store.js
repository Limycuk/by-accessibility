import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import config from 'config';
import rootSaga from './sagas';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default () => {
  const middleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (config.isActiveDevTool && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, middleware))
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
