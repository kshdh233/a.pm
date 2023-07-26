import React from 'react';
import FixedBottomNavigation from "../component/BottomNav";
import Login_ragist from "../component/Login_ragist";
import Header from "../component/Header";
import Schedule from "../component/Schedule";
import '../styles/Login.css';
import '../styles/Header.css';
import '../styles/Schedule.css';

function My_page(){
    return(
        <div>
        <Header />
        <Login_ragist />
        <Schedule />
        
        </div>
    )
}

export default My_page;
