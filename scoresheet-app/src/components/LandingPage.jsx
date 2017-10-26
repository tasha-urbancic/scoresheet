import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <h1>WELCOME TO OUR WEBSITE!</h1>
        <button type="button" className="btn btn-outline-primary">
          <Link to="/templates">START PLAYING</Link>
        </button>

        {/* <button type="button" class="btn btn-outline-primary">
          <Link to="/templates/new">Create New Template</Link>
        </button> */}
      </div>
    );
  }
}
