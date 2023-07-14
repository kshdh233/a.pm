import React, { Component } from 'react';

function Semi_login(){
  return(
    <div>
      <div className='semi_login'>
        <a href="/Semi_login">이메일로 로그인 </a>
      </div>
      <div className='semi_regist'>
        <a id='m'>아직 a.pm회원이 아니신가요?</a><a href="/Semi_regist">회원가입 {'>'}</a>
      </div>
    </div>
  )
};

export default Semi_login;