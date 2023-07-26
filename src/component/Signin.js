import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../_actions/user_action';

function Signin() {

  // const dispatch = useDispatch();

  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    // Prevent the page from reloading on button click
    event.preventDefault();

    console.log('ID:', ID);
    console.log('Password:', Password);

    let body = {
      id: ID,
      password: Password,
    };
    // dispatch(loginUser(body));
  }

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
        <br />
        <button formAction=''>
          로그인
        </button>
      </form>
    </div>
  )
}

export default Signin;
