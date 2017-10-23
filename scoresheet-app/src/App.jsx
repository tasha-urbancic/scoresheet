import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Content from './containers/Content.jsx';
import NavBar from './components/NavBar.jsx';

// e.g. ReactBootstrap.Button, Navbar, Jumbotron, Table, Grid, collapse, Accordion, etc

{/* <ReactBootstrap.collapse /> */}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
        {/* <ReactBootstrap.Collapse /> */}
      </div>
    );
  }
}
export default App;
