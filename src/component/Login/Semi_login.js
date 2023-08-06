import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Semi_login(){
  return(
    <div>
      <div className='semi_login'>
        <Link to="/SignIn_page">이메일로 로그인 </Link>
      </div>
      <div className='SignUp_page'>
        <a id='m'>아직 a.pm회원이 아니신가요?</a><Link to="/SignUp_page">회원가입 {'>'}</Link>
      </div>
    </div>
  )
};

export default Semi_login;