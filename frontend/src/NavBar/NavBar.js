import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Welcome to User Management!
      </Link>
      <Button variant="success">Success</Button>
    </nav>
  );
}

export default NavBar;