import react from 'react';
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
                            <i className="SGdmaillogo" ></i>
                            <p className="SGcompanytext"> Sign in with email</p>
            
                        </div>
                        <div className="SGnoaccountline">
                            <p>Already have an account?<span className="SGgreencolor" > Sign in</span></p>                  
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