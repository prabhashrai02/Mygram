import React, { Component } from 'react';
import '../Maincontent/Maincontent.css'
import Grid from '@material-ui/core/Grid';
import Mainpage from '../Mainpage/Mainpage';

class Maincontent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (  
            <div>
                <Grid Component style={{"display":"flex"}}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={5}>
                            <div className="blank"></div>
                            <Mainpage />
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Maincontent;