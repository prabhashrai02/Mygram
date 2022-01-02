import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <input className="Loginpage_textbox" type="text" placeholder='Phone number, Username, or email'/>
                <input className="Loginpage_textbox" type="password" placeholder='Password'/>
                <button className="Loginpage_button"> Log In</button>
            </div>
        );
    }
}
 
export default Signin;