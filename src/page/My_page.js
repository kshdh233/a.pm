import React from 'react';
import FixedBottomNavigation from "../component/BottomNav";
import Login from "../component/Login";
import Header from "../component/Header";
import Schedule from "../component/Schedule";
import '../styles/Login.css';
import '../styles/Header.css';
import '../styles/Schedule.css';

function My_page(){
    return(
        <div>
        <Header />
        <Login />
        <Schedule />
        <FixedBottomNavigation/>
        </div>
    )
}

export default My_page;
