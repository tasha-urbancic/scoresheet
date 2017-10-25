// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import createTemplates from './redux/reducers/create-templates';
import templates from './redux/reducers/templates';
import gamePage from './redux/reducers/game-page';

import { dataFetch } from './redux/actions/grab-data';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App.jsx';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

const totalReducer = combineReducers({
  createTemplates,
  templates,
  gamePage
});

const store = createStore(
  totalReducer,
  composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger))
);

store.dispatch(dataFetch());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
