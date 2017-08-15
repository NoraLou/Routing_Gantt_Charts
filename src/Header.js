import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';

import { Nav, NavItem } from 'react-bootstrap';
// alse see possible to use ttps://github.com/react-bootstrap/react-router-bootstrap/blob/master/src/LinkContainer.js
// try with version 3 of bootstrap.. try just building your own componenet with some simple calls. 

class Header extends Component {



  render() {    
    return (
      <nav className="nav" style={{background: 'white', padding: '20px'}}>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/projects'>Projects</Link>
        <Link className='nav-link' to='/manage'>Manage</Link>     
      </nav>

    );
  }
}

export default Header;


