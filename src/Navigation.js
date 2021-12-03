
import React from "react";
import { BrowserRouter as Router,  Switch,  Route, Link } from "react-router-dom";
import Button from "./Button";
import './Navigation.css';

const Navigation = () => {
  return (
    // <div className="navbar_style" >
      <div className="navbar">
      
          <i className="mainlogo" alt="mediumlogo">  </i>
         
      <Link to ="/signin">
      <span className="nav_element">Sign In</span>
      </Link>

        
       <Link from="*" to ="/https://medium.com/about?autoplay=1"> 
        <span className="nav_element">Our Story</span>
        </Link>

       
      <Link to="https://medium.com/membership">
        <span className="nav_element">Membership</span>
      </Link>
        
      <Link to="/https://medium.com/creators">
        <span className="nav_element">write</span>
      </Link>
      
        <Button button_name="Get Started" />
      
     </div>


    
    
  )
  
}
export default Navigation