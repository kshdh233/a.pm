import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../../_actions/user_action';

function Signup(props) {

  // const dispatch = useDispatch();

  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
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

    // Check if ID already exists
    // try {
    //   const response = await fetch('/api/checkID', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ id: ID }),
    //   });

    //   const data = await response.json();
    //   if (data.idExists) {
    //     return alert('이미 사용 중인 ID입니다.');
    //   }

      // If ID doesn't exist, proceed with registration
      let body = {
        id: ID,
        name: Name,
        password: Password,
        confirmPassword: ConfirmPassword,
      };

      // Here you can dispatch the action to register the user
      // dispatch(registerUser(body))
      //   .then(response => {
      //     if (response.payload.success) {
      //       props.history.push('/loginPage');
      //     } else {
      //       alert('Error');
      //     }
      //   });
  //   } catch (error) {
  //     console.error('Error checking ID:', error);
  //     alert('서버 오류가 발생했습니다.');
  //   }
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
        <label>이름</label>
        <input type='text' value={Name} onChange={onNameHandler} />
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
