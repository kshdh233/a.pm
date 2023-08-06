import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // 서버로 로그인 정보를 전송하는 API 호출
      const response = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: ID,
          password: Password,
        }),
      });

      // 서버의 응답 상태 코드 확인
      if (response.status === 200) {
        // 로그인 성공 시 홈 페이지로 이동
        navigate('/Main_page');
      } else if (response.status === 401) {
        // 로그인 실패 시 서버 응답을 JSON 형태로 파싱하여 오류 메시지 가져오기
        const data = await response.json();

        if (data && data.error) {
          // 오류 메시지가 존재하는 경우, 메시지를 출력
          alert(data.error);
        } else {
          // 오류 메시지가 없는 경우, 기본 오류 메시지 출력
          alert('로그인 실패: 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
        }
      } else {
        // 기타 오류 상태 코드 처리
        alert('로그인 실패: 서버에서 응답을 받지 못했습니다.');
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '400px'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>ID</label>
        <input type='text' value={ID} onChange={onIDHandler} />

        <label>비밀번호</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />
        
        <br />
        <button type='submit'>
          로그인
        </button>
      </form>
      <br />
      <Link to="/signup_page">회원가입 페이지로 이동</Link>
    </div>
  )
}

export default Login;
