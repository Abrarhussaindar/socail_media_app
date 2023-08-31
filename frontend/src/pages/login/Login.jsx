import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
    const email = useRef();
    const password = useRef();

    const {user, isFetching, dispatch} = useContext(AuthContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeftSide">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social App.
                    </span>
                </div>
                <div className="loginRightSide">
                    <form className="loginBox" onSubmit={handleFormSubmit}>
                        <input placeholder="Email" type="email" required ref={email} className='loginInput' />
                        <input placeholder="Password" type="password" minLength="8" required ref={password} className='loginInput' />
                        <button className="loginBtn" disabled={isFetching}>{isFetching ? <CircularProgress color="secondary" size="20px"/> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterBtn">{isFetching ? <CircularProgress color="secondary" size="20px"/> : "Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
