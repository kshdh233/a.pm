import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return <header>
    <Link to="/Main_page">
      <h1> a.pm</h1>
    </Link>
    </header>
}

export default Header;