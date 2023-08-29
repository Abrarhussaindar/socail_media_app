import React, { Component } from 'react'
import './login.css'
export default class Login extends Component {
    render() {
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
                        <div className="loginBox">
                            <input placeholder="Email" className='loginInput' />
                            <input placeholder="Password" type="password" className='loginInput' />
                            <button className="loginBtn">Log In</button>
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterBtn">Create a New Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
