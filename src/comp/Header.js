import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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


