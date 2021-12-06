import react from 'react';
import './LogInEP.css';

function LogInEP() {
    return (
    
        <div className="LogInEP">
            <div className="LogInEPsection">
                <div className="LogInEPboxes">
                    <div className="LogInEPcontent">
                        <div className="maincoulmn">
                        <form>
                            <input className="IPfield" type="email" name="email" placeholder="E - Mail Id" />
                            <input className="IPfield" type="password" name="password" placeholder="Password" />
                            <input className="accButt" type="submit" value="Submit" />
                        </form>

                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    

    );
}
export default LogInEP;