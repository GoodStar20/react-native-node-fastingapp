import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, apiMiddleware, logger];

const rootReducerWithLogout = (state, action) => {
  return rootReducer(state, action);
};

const store = createStore(
  rootReducerWithLogout,
  composeEnhancer(applyMiddleware(...middleware))
);

export default function configureStore() {
  return store;
}
