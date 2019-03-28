import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Users/>
        <p>Work in progress.</p>
      </div>
    );
  }
}

export default App;