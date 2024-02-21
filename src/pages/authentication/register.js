import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './authentication.scss';

import lohinbanner from '../../assets/img/lohinbanner.png';
import IconGmail from '../../assets/img/gmail.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconApple from '../../assets/img/apple.svg';
import { useAuth } from '../../contexts/AuthContext';


const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setUseremail] = useState("");
    const [password, setUserpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth();
    const history = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        // do validation
        if(password !== confirmPassword){
            return setError("Password don't match!")
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }

    return(
        <div className="login-section">
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-md-8 rounded login-card-section">
                        <div className='loginHeader'>
                            <img src={lohinbanner} alt='' />
                        </div>
                        <div className='formSection registerForm'>
                            <div className='formHeadingText'>
                                <h3>Registration</h3>
                                <p>Registation with fitnes & get healthy</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <input 
                                            type="text" 
                                            className="form-control rounded-0" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Name" 
                                            required
                                            value={username} 
                                            onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <input 
                                            type="email" 
                                            className="form-control rounded-0" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email" 
                                            required
                                            value={email} 
                                            onChange={(e) => setUseremail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <input 
                                            type="password" 
                                            className="form-control rounded-0" 
                                            placeholder="Password" 
                                            required
                                            value={password} 
                                            onChange={(e) => setUserpassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group">
                                            <input 
                                            type="password" 
                                            className="form-control rounded-0" 
                                            placeholder="Confirm Password" 
                                            required
                                            value={confirmPassword} 
                                            onChange={(e) => setconfirmPassword(e.target.value)} 
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>

                                        <button type="submit" class="btn btn-primary w-100 rounded-0 registerBtn">Register</button>
                                        {error && <p className='error'>{error}</p>}
                                        <div className='SocialLogin d-flex mt-3'>
                                            <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconGmail} alt=''/> Google</button>
                                            <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconFacebook} alt=''/> Facebook</button>
                                            <button className='btn btn-primary bg-white text-dark rounded-0 border-0 m-1'><img src={IconApple} alt=''/> Apple</button>
                                        </div>
                                        <div className='haveAccount'>Already Haven't Account ? <Link to='/login'>Login</Link></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    );

}
export default Register;