import React, { useState } from 'react';
import '../../styles/My_info.css'; // 스타일을 정의한 CSS 파일을 import합니다.

const MyInfo = () => {
  const [userInfo, setUserInfo] = useState({
    username: ' 님 환영합니다',
    avatarUrl: '//yaimg.yanolja.com/joy/sunny/static/images/my/img-my-profile-50.svg'
  });

  return (
    <>
    <h2 className="my-info-title">MY a.pm</h2>
    <div className="my-info-container">
      <div className="user-info">
        <img className="profile-image" src={userInfo.avatarUrl} alt="프로필 사진" />
        <div className="user-details">
          <h3 className="username">{userInfo.username}</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyInfo;
