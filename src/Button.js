import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Button.css';


const Button = (props) => {

  return (
    <div className="button_display">
        <Link to="/login">
        
        <a className="ex" href="">{props.button_name} </a>
        
      </Link>
    </div>
  )
  
}
export default Button