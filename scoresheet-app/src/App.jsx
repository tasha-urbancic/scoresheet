import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import * as ReactBootstrap from "react-bootstrap";
import Content from './containers/Content.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';

// e.g. ReactBootstrap.Button, Navbar, Jumbotron, Table, Grid, collapse, Accordion, etc

class App extends Component {
  render() {
    return (
      <div>

        <NavBar />

        <Route exact path='/' component={LandingPage} />
        <Route path="/" component={Content} />

      </div>
    );
  }
}
export default App;


{/* <h1>WELCOME TO OUR WEBSITE!</h1>
<button type="button" class="btn btn-outline-primary">
  <Link to='/templates'>START PLAYING</Link>
</button>

<button type="button" class="btn btn-outline-primary">
  <Link to="/templates/new">Create New Template</Link>
</button> */}