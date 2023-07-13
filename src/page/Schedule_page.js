import React from 'react';
import FixedBottomNavigation from "../component/Nav";
import Header from "../component/Header";
import Calender from "../component/Calender";
import '../styles/Header.css';


function Schedule_page(){
    return(
        <div>
        <Header />
        <Calender />
        <FixedBottomNavigation/>
        </div>
    )
}

export default Schedule_page;
