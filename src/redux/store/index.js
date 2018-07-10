import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';

export const history = createHistory();
const enhancers = [];
const middleware = routerMiddleware(history);

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk, middleware), ...enhancers)
);

export default store;
