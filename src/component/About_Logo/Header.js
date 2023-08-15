import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return <header>
    <Link to="/Main_page">
      <h1 style={{margin: '1px',backgroundColor:'pink'}}> a p,m</h1>
    </Link>
    </header>
}

export default Header;