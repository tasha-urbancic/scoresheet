import React, { Component } from 'react';
import UserPage from './containers/UserPage.jsx';
import NavBar from './components/NavBar.jsx'

class App extends Component {
  render() {
  return (
    <div>
      <NavBar />
      <UserPage />
    </div>
    );
  }
}
export default App;
