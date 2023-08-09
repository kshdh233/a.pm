import React, { useState, useEffect } from 'react';
import '../../styles/My_info.css';

function My_Info(props) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    avatarUrl: '//yaimg.yanolja.com/joy/sunny/static/images/my/img-my-profile-50.svg'
  });
  console.log(props.username)
  useEffect(() => {
    setUserInfo({
      username: props.username + ' 님 환영합니다',
      avatarUrl: '//yaimg.yanolja.com/joy/sunny/static/images/my/img-my-profile-50.svg'
    });
  }, [props.username]);

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
