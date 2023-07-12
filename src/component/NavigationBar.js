import React, { Component } from 'react';

function NavigationBar(){
  return (
    <nav>
      <ul>
        <li><a href="/Place">공연장 정보</a></li>
        <li><a href="/Musical">공연 정보</a></li>
        <li><a href="/Home" >홈</a></li>
        <li><a href="/Like">좋아요</a></li>
        <li><a href="/My">마이 페이지</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;