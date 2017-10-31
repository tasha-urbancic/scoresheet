import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Content from './containers/Content.jsx';
import LandingPage from './components/LandingPage.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Route exact path="/" component={LandingPage} />
        <Route path="/" component={Content} />
      </div>
    );
  }
}
export default App;
