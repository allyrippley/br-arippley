import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

import createSagaMiddleware from 'redux-saga';
import dataSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default function configureStore() {
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(dataSaga);
  return store;
}