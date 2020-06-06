import { createStore, applyMiddleware } from 'redux';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];

const middleware = [routerMiddleware(history)];
/*
 * if (process.env.NODE_ENV === 'development') {
 * const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
 * if (typeof devToolsExtension === 'function') {
 * enhancers.push(devToolsExtension());
 * }
 *}
 */

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);
export default store;
