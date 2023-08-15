import React from 'react';
import Signin from "../../component/Login/Signin";
import '../../styles/My_info.css';
import '../../styles/Signin.css';

function My_page(){
    return(
        <div>
            <h2 className="my-info-title">My Page</h2>
            <Signin />        
        </div>
    )
}

export default My_page;
