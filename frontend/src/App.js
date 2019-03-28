import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NewUser from './Users/NewUser';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Users}/>
        <Route exact path='/newUser' component={NewUser}/>
      </div>
    );
  }
}

export default App;