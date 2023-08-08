import React from 'react';
import Header from "../../component/About_Logo/Header";
import Signin from "../../component/Login/Signin";
import '../../styles/Login.css';
import '../../styles/Signin.css';

function My_page(){
    return(
        <div>
        <Header />
        <Signin />        
        </div>
    )
}

export default My_page;
