import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Content from './containers/Content.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';

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