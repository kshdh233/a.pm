import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../../_actions/user_action';


function Signin() {

    //const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        console.log('Email :', Email);
        console.log('Password :', Password);
        
        let body = {
            email: Email,
            password: Password,
        }
        // dispatch(loginUser(body));
    }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '400px'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>이메일</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>비밀번호</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button formAction=''>
                    로그인
                </button>
            </form>
        </div>
    )
}

export default Signin;