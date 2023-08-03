import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../../_actions/user_action';

function Signup(props) {

  // const dispatch = useDispatch();

  const [ID, setID] = useState("");
  
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }



  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
    }
  
    try {
      // 서버로 회원가입 정보를 전송하는 API 호출
      const response = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: ID,
         
          password1: Password,
          password2: ConfirmPassword,
        }),
      });
  
      // 서버로부터 받은 응답을 JSON 형태로 파싱
      const data = await response.json();
  
      if (response.status === 200) {
        // 회원가입 성공 시 로그인 페이지로 이동
        props.history.push('/login');
      } else {
        // 회원가입 실패 시 에러 메시지를 출력
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('서버 오류가 발생했습니다.');
    }
  };
  

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '400px'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>ID</label>
        <input type='text' value={ID} onChange={onIDHandler} />
     
        <label>비밀번호</label>
        <input type='password' value={Password} onChange={onPasswordHandler} />
        <label>비밀번호 확인</label>
        <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
        <br />
        <button formAction=''>
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Signup;
