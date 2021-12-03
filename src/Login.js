import react from 'react';
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
                                <p className="companytext"> Sign in with Google</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="fblogo" ></i>
                                <p className="companytext"> Sign in with Facebook</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="applelogo" ></i>
                                <p className="companytext"> Sign in with Apple</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="twitterlogo" ></i>
                                <p className="companytext"> Sign in with Twitter</p>
                  
                            </div>
                            <div className="buttonthing">
                                <i className="dmaillogo" ></i>
                                <p className="companytext"> Sign in with email</p>
                  
                            </div>
                            <div className="noaccountline">
                                <p>No account?<span className="greencolor" > Create one</span></p>                  
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
