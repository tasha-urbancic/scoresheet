import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <div>
          <img
            src="/scoresheet-app/docs/imgs/logo-first-draft.png"
            className="landing-page-logo"
          />
          <div className="landing-page-btn">
            <button className="btn btn-dark btn-lg js-scroll-trigger">
              <Link to="/templates" className="white-text">
                Start Playing
              </Link>
            </button>
          </div>
        </div>
        {/* <img
          src="/scoresheet-app/docs/imgs/notepad.png"
          className="landing-page-notepad"
        /> */}
      </div>
    );
  }
}
