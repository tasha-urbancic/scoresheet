import React, { Component } from 'react';
// import * as ReactBootstrap from "react-bootstrap";
import Content from './containers/Content.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from "./components/Footer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }
}
export default App;
