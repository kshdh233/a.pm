import React, { useState, useEffect } from 'react';
import '../../styles/My_info.css';

function My_Info(props) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    avatarUrl: '//yaimg.yanolja.com/joy/sunny/static/images/my/img-my-profile-50.svg'
  });

  useEffect(() => {
    // localStorage에서 저장된 아이디 가져오기
    const savedUsername = localStorage.getItem('username');
    
    // localStorage에 아이디가 저장되어 있다면 사용하고, 없으면 기본값 사용
    const usernameToDisplay = savedUsername ? savedUsername : '게스트';
    
    // 사용자 이름 설정
    setUserInfo({
      username: usernameToDisplay + ' 님 환영합니다',
      avatarUrl: '//yaimg.yanolja.com/joy/sunny/static/images/my/img-my-profile-50.svg'
    });
  }, []);

  return (
    <>
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

export default My_Info;
