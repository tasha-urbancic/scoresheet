// navbar render html here

import React from 'react';

export default function NavBar(props) {
  return (

    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        
        <div id="navbar" className="nav nav-pills flex-column flex-sm-row">
          <ul className="nav navbar-nav">
            <li>
              <img src="../scoresheet-app/src/img-files/logo-first-draft.png"/>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#!">Play Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#!">Create New</a>
            </li>
          </ul>
          <form className="navbar-form navbar-right" role="search" method="get" id="searchform" action="">
            <div className="form-group">
              <input name="s" id="s" type="text" className="search-query form-control" autocomplete="off" placeholder="Search..."></input>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

