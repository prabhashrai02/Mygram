import React, { Component } from 'react';
import "./Signup.css";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>               
                <input className="Loginpage_textbox" type="text" placeholder='Mobile number or email'/>
                <input className="Loginpage_textbox" type="text" placeholder='Full Name'/>
                <input className="Loginpage_textbox" type="text" placeholder='Username'/>
                <input className="Loginpage_textbox" type="password" placeholder='Password'/>
                <button className="Loginpage_button"> Sign Up</button>
            </div>
        );
    }
}
 
export default Signup;