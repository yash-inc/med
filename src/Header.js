import './Header.css';
import Button from './Button';
import './Button.css'

function Header() {
    return (
        <div className="OAHeader">
            <div className="headdata">
                <h2 className="mainheading">Medium is a place to write, read, and connect</h2>
                <h3 className="itseasy">It's easy and free to post your thinking on any topic and connect with millions of readers.</h3>
                <Button button_name ="Start Writing" />
            </div>
            <div className="headcoma"></div>
        </div>
    )
    
}
export default Header  