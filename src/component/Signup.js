import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../../_actions/user_action';

function Signup(props) {

    // const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
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
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        let body = {
            email: Email,
            name: Name,
            password: Password,
            confirmPassword: ConfirmPassword,
        }

        //dispatch(registerUser(body))
        // .then(response => {
        //     if(response.payload.success){
        //         props.history.push('/loginPage')
        //     } else {
        //         alert('Error')
        //     }
        // })
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
                <label>이름</label>
                <input type='text' value={Name} onChange={onNameHandler}/>
                <label>비밀번호</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <label>비밀번호 확인</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br />
                <button formAction=''>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default Signup;