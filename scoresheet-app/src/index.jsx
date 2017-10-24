// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import pages from './redux/reducers/pages';
import createTemplates from './redux/reducers/create-templates';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './App.jsx';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

const totalReducer = combineReducers({
  pages,
  createTemplates
})

const store = createStore(totalReducer, composeWithDevTools(
  applyMiddleware(logger)
));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
