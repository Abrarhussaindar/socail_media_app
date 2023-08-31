import { useRef } from 'react';
import './register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();



    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity('Passwords do not match!');
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post('/user/create', user);
                navigate('/login');
            }catch(err){
                console.log(err);
            }
        }

    }
    return (
        <div className='login' >
            <div className="loginWrapper">
                <div className="loginLeftSide">
                    <h3 className="loginLogo">Social Media App</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social App.
                    </span>
                </div>
                <div className="loginRightSide">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Username" required ref={username} className='loginInput' />
                        <input placeholder="Email" type="email" required ref={email} className='loginInput' />
                        <input placeholder="Password" required ref={password} type="password" className='loginInput' />
                        <input placeholder="Password Again" required ref={passwordAgain} type="password" className='loginInput' />
                        <button className="loginBtn" type="submit">Sign Up</button>
                        <button className="loginRegisterBtn">Log into your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

