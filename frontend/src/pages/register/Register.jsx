import React, { Component } from 'react'
import './register.css'
export default class Register extends Component {
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
                            <input placeholder="Username" className='loginInput' />
                            <input placeholder="Email" className='loginInput' />
                            <input placeholder="Password" type="password" className='loginInput' />
                            <input placeholder="Password Again" type="password" className='loginInput' />
                            <button className="loginBtn">Sign Up</button>
                            <button className="loginRegisterBtn">Log into your Account</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
