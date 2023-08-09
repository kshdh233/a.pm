import React from 'react';
import My_Info from '../../component/Login/My_info';
import Schedule from '../../component/Body/Schedule';
import '../../styles/Login.css';
import '../../styles/Schedule.css';

function My_info_page({ handleLogout }) {
    return(
        <div>
            <My_Info />
            <Schedule />
            <button onClick={handleLogout}>로그아웃</button> 
        </div>
    )
}

export default My_info_page;
