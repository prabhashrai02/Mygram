import React, { Component } from 'react';
import "./Navbar.css";
import Grid from '@material-ui/core/Grid';
import mygram_logo from '../../images/mygram_logo.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import react from '../../images/react.svg'
import Avatar from '@material-ui/core/Avatar';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div className="Navbar_content">
                    <Grid container className="Navbar_content">
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={3}>
                            <img className='Navbar_logo' src={mygram_logo} />
                        </Grid>
                        <Grid item xs={4}>
                            <input className='Navbar_search' text='text' placeholder='Search' />
                        </Grid>
                        <Grid item xs={2} style={{"display":"flex"}}>
                            <img src={home} className='Navbar_funcimage' width="25px" />
                            <img className='Navbar_funcimage' width="25px" height="25px" src="https://img.icons8.com/ios/50/000000/plus--v2.png"/>
                            <img src={find} className='Navbar_funcimage' width="25px" />
                            <img src={react} className='Navbar_funcimage' width="25px" />
                            <Avatar src='' className='Navbar_funcimage' style={{"maxWidth":"25px","maxHeight":"25px"}}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
 
export default Navbar;