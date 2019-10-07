import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Main from './components/main/Main';

import combinedReducers from './reducers/combineReducers.js';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />;
        <Route path="/main" component={Main} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
