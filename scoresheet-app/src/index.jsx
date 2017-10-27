// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component

import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// starting to integrate react-router, this is direct from
// the tutorial
import { BrowserRouter as Router, Route } from 'react-router-dom';

import pages from './redux/reducers/pages';
import createTemplates from './redux/reducers/create-templates';
import templates from './redux/reducers/templates';
import gamePage from './redux/reducers/game-page';
import { getTemplates } from './redux/actions/grab-data';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App.jsx';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

const totalReducer = combineReducers({
  pages,
  createTemplates,
  templates,
  gamePage
});

const store = createStore(
  totalReducer,
  composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger))
);

store.dispatch(getTemplates());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
