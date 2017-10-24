// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

// this adds react-router to the app (because everything
// runs from this file)
// might not be necessary if you have react-router-dom
// import { Router, Route, Switch } from "react-router";

// starting to integrate react-router, this is direct from
// the tutorial
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";

import pages from "./redux/reducers/pages";
import createTemplates from "./redux/reducers/create-templates";
import templates from "./redux/reducers/templates";
import { dataFetch } from "./redux/actions/grab-data";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App.jsx";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-theme.css";

const totalReducer = combineReducers({
  pages,
  createTemplates,
  templates
});

const store = createStore(
  totalReducer,
  applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(logger))
);

store.dispatch(dataFetch());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById("react-root")
);
