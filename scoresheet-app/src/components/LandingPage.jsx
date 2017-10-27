import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <div>
          <img
            src="../../docs/imgs/logo-first-draft.png"
            className="landing-page-logo"
          />
        </div>
        <img
          src="../../docs/imgs/notepad.png"
          className="landing-page-notepad"
        />
        <div className="landing-page-btn">
          <button className="btn btn-dark btn-lg js-scroll-trigger">
            <Link to="/templates">Start Playing</Link>
          </button>
        </div>
      </div>
    );
  }
}
