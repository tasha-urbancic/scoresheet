import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <header className="header" id="top">
          <div className="text-vertical-center">
            <h1>Welcome to our website</h1>
            <br />
            <button className="btn btn-dark btn-lg js-scroll-trigger">
              <Link to="/templates/new">Start Playing</Link>
            </button>
          </div>
        </header>
      </div>
    );
  }
}
