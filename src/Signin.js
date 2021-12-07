import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'

function Signin() {
    return (
        <div className="Signin">
            <div className="Signinsection">
                <div className="Signinboxes">
                <div className="Signincontent">
                        
                    <div className="SGfiveelements">
                        <h1 className="SGwelcometext">Join Medium.</h1>
                    </div>

                    <div className="SGbuttonlists">

                        <div className="SGbuttonthing">
                            <i className="SGgooglelogo" ></i>
                            <p className="SGcompanytext"> Sign in with Google</p>
            
                        </div>
                        <div className="SGbuttonthing">
                            <i className="SGfblogo" ></i>
                            <p className="SGcompanytext"> Sign in with Facebook</p>
            
                        </div>
                            <div className="SGbuttonthing">
                                
                                <Link to="/signinVEUP">
                                    <i className="SGdmaillogo" ></i>
                                </Link>
                                <Link to="/signinVEUP">
                                    <p className="SGcompanytext"> Sign in with email</p>
                                </Link>
            
                        </div>
                        <div className="SGnoaccountline">
                                <p>Let's Start your Journy
                                    <Link to="/signinVEUP">    
                                        <span className="SGgreencolor" > Sign in </span>
                                    </Link>
                                    
                                </p>
                        </div>
                    </div>
                    <p className="SGlastsec">Click “Sign In” to agree to Medium’s <a href="https://medium.com/" className="">Terms of Service</a> and acknowledge that Medium’s  <a href="https://medium.com/" className="">Privacy Policy</a> applies to you.</p>
                    </div>               
                </div>
            </div>
        </div>
    );
}
export default Signin