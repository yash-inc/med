import react from 'react';
// import './SignInEUP.css';
import './SignInEUP.css';


function SignInEUP() {
    return (
    
        
        <div className="SingInEUP">
            <div className="SingInEUPsection">
                  <div className="SingInEUPboxes">
                    <div className="SingInEUPcontent">
                        <div className="SIEUPmaincoulmn">
                        
                        <form>
                            <input className="SIEUPIPfield" type="email" name="email" placeholder="E - Mail Id" />
                            
                            <input className="SIEUPIPfield" type="name" name="userName" placeholder="Create User Name" />
                            
                            <input className="SIEUPIPfield" type="password" name="password" placeholder="Password" />
                            
                            <input className="SIEUPaccButt" type="submit" value="Submit" />
                        </form>

                        </div>
                    </div>                     
                </div>
            </div> 
        </div>
    

    );
}
export default SignInEUP;