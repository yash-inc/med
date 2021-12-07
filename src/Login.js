import React from 'react';
import { BrowserRouter as Router,  Switch,  Route, Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
        <div className="Login">
            <div className="loginsection">
                <div className="Loginboxes">
                    <div className="logincontent">
            
                        <div className="fiveelements">
                            <h1 className="welcometext">Welcome back.</h1>
                        </div>

                        <div className="buttonlists">

                            <div className="buttonthing">
                                <i className="googlelogo" ></i>
                                <p className="companytext"> Log in with Google</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="fblogo" ></i>
                                <p className="companytext"> Log in with Facebook</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="applelogo" ></i>
                                <p className="companytext"> Log in with Apple</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="twitterlogo" ></i>
                                <p className="companytext"> Log in with Twitter</p>
                  
                            </div>
                            <div className="buttonthing">
                            <Link to="loginVEP">
                                <i className="dmaillogo" ></i>
                            </Link>
                            <Link to="loginVEP">
                                <p className="companytext"> Log in with email</p>
                            </Link>
                  
                            </div>
                            <div className="noaccountline">
                                <p>Login by?
                                    <span className="greencolor" >
                                        <Link to="loginVEP"> User Name</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p className="lastsec">Click “Sign In” to agree to Medium’s <a href="https://medium.com/" className="">Terms of Service</a> and acknowledge that Medium’s  <a href="https://medium.com/" className="">Privacy Policy</a> applies to you.</p>
                    </div>                
                </div>
            </div>
        </div>
    );
}
export default Login
