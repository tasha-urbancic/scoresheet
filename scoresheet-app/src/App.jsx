import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import Content from "./containers/Content.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

// e.g. ReactBootstrap.Button, Navbar, Jumbotron, Table, Grid, collapse, Accordion, etc

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <ReactBootstrap.Button bsStyle="success" bsSize="small">
          Something
        </ReactBootstrap.Button>
        <Footer />
      </div>
    );
  }
}
export default App;
