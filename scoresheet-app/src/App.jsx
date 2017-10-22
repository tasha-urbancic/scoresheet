import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import Content from './containers/Content.jsx';
import NavBar from './components/NavBar.jsx';

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
