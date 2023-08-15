import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Schedule(){
  return(
    <>
      <div className='box-area'>
        <Link to='/WishList_page'>관심 배우 {'>'}</Link>
      </div>
      <div className='box-area'>
        <Link to="/Schedule_page">일정 관리 {'>'}</Link>
      </div>
  </>
  )
};

export default Schedule;