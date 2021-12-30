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
                <input class="Loginpage_textbox" type="text" placeholder='Mobile number or email'/>
                <input class="Loginpage_textbox" type="text" placeholder='Full Name'/>
                <input class="Loginpage_textbox" type="text" placeholder='Username'/>
                <input class="Loginpage_textbox" type="password" placeholder='Password'/>
                <button class="Loginpage_button"> Sign Up</button>
            </div>
        );
    }
}
 
export default Signup;