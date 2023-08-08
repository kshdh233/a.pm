import React from 'react';
import Header from "../../component/About_Logo/Header";
import MyInfo from '../../component/Login/My_info';
import Schedule from '../../component/Body/Schedule';
import '../../styles/Login.css';
import '../../styles/Schedule.css';

function My_info_page(){
    return(
        <div>
        <Header />
        <MyInfo />
        <Schedule />    
        </div>
    )
}

export default My_info_page;
