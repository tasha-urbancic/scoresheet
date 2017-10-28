// navbar render html here

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div id="navbar" className="nav nav-pills flex-column flex-sm-row">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">
                <img src="/scoresheet-app/src/img-files/logo-first-draft.png" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/templates">Play Games</Link>
            </li>
            <li className="nav-item">
              <Link to="/templates/new">Create New</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
