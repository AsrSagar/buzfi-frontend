import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authentication.scss';
import lohinbanner from '../../assets/img/lohinbanner.png';
import IconGmail from '../../assets/img/gmail.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconApple from '../../assets/img/apple.svg';


const Login = () => {

    
    function handleSubmit(e){
        e.preventDefault();
        console.log("Login Succesfull.");
    }

    return(
        <div className="login-section">
            <div className="container">
                <div class="row">
                    <div className="offset-3 col-md-6 rounded login-card-section">
                        <div className='loginHeader'>
                            <img src={lohinbanner} alt='' />
                        </div>
                        <div className='formSection w-50'>
                            <div className='formHeadingText'>
                                <h3>Login</h3>
                                <p>Login with fitnes & get healthy</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input type="email" class="form-control rounded-0" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control rounded-0" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary w-100 rounded-0">Log in</button>
                                <Link className='forgetPass'>Forget Password !</Link>
                                <div className='SocialLogin d-flex'>
                                    <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconGmail} alt=''/> Google</button>
                                    <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconFacebook} alt=''/> Facebook</button>
                                    <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconApple} alt=''/> Apple</button>
                                </div>
                                <div className='haveAccount'>Haven't Account ? <Link to='/register'>Sign up</Link></div>
                            </form>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    );

}
export default Login;