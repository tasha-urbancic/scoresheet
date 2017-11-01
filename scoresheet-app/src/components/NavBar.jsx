// navbar render html here

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="nav-container">
        <div className="nav navbar-nav">
          <div className="nav-item">
            <Link to="/">
              <img src="/scoresheet-app/src/img-files/logo-first-draft.png" />
            </Link>
          </div>
          <div className="right-nav">
            <div className="nav-item nav-link">
              <Link
                to="/templates"
                onClick={e => {
                  this.props.clearCreatingGame();
                }}
              >
                Play Games
              </Link>
            </div>
            <div className="nav-item nav-link">
              <Link to="/templates/new">Create New</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
