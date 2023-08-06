import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return <header>
    <Link to="/Main_page">
      <h1 style={{margin: '1px'}}> a.pm</h1>
    </Link>
    </header>
}

export default Header;