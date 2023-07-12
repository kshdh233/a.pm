import React from 'react';
import FixedBottomNavigation from "../component/Nav";
import Login from "../component/Login";
import Header from "../component/Header";
import Schedule from "../component/Schedule";

function My_page(){
    return(
        <div>
        <Header />
        <Schedule />
        <FixedBottomNavigation/>
        <Login />
        </div>
    )
}

export default My_page;
