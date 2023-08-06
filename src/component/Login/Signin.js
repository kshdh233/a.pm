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

      // 서버로부터 받은 응답을 JSON 형태로 파싱
      const data = await response.json();

      if (response.status === 200) {
        // 로그인 성공 시 홈 페이지로 이동
        navigate('/Main_page');
      } else {
        // 로그인 실패 시 에러 메시지를 출력
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
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
      <Link to="/signup">회원가입 페이지로 이동</Link>
    </div>
  )
}

export default Login;
