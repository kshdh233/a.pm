import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Schedule(){
  return(
    <>
      <div className='box-area'>
        <Link to="/Schedule_page">일정 관리 {'>'}</Link>
      </div>
      <div className='box-area'>
        <Link to='/ActorList_page'>배우 목록 {'>'}</Link>
      </div>
  </>
  )
};

export default Schedule;