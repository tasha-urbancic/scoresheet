// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import pages from './redux/reducers/pages';

import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(pages, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
