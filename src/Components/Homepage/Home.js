import React, { Component } from 'react';
import Maincontent from '../Maincontent/Maincontent';
import Navbar from '../Navbar/Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Navbar />
                <Maincontent />
            </div>
        );
    }
}
 
export default Home;