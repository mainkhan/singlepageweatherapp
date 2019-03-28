import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Welcome to User Management!
      </Link>
      <Link to="/newUser">
      <button variant="success">New User</button>
      </Link>
    </nav>
  );
}

export default NavBar;