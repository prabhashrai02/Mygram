import React, { Component } from 'react';
import './Loginpage.css'
import Grid from '@material-ui/core/Grid';
import mygram_image from '../../images/mygram_image.svg'
import mygram_logo from '../../images/mygram_logo.png'
import google from '../../images/google.png'
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            isLogin: true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin){
            this.setState({isLogin: false});
        }
        else{
            this.setState({isLogin: true});
        }    
    }

    render() { 
        return (  
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        <div class="Loginpage_main">
                            <div>
                                <img src={mygram_image} class="Loginpage_image" />
                            </div>
                            <div>
                                <div class="Loginpage_right">
                                    <img class="Loginpage_logo" src={mygram_logo} />
                                    <div class="Loginpage_loginbox">

                                        {
                                            this.state.isLogin ? <Signin /> : <Signup /> 
                                        }

                                        <div class="Loginpage_ordiv">
                                            <div class="Loginpage_divider"></div>
                                            <div class="Loginpage_or">OR</div>
                                            <div class="Loginpage_divider"></div>
                                        </div>

                                        <div class="Loginpage_facebookauth"> 
                                            <img class="Loginpage_fb" src={google} />Login with Google</div>
                                        <div class="Loginpage_forget">Forget Password?</div>
                                    </div>
                                </div>

                                <div class="Loginpage_signupoption">
                                    {
                                        this.state.isLogin ? 
                                        <div class="Loginpage_signup">
                                            Don't have an account? 
                                            <span onClick={this.changeLogin} style={{"margin-left":"5px", "font-weight":"bold", "color":"#0395F6"}}>Sign up</span>
                                        </div> 
                                        :
                                        <div class="Loginpage_signin">
                                            Have an account? 
                                            <span onClick={this.changeLogin} style={{"margin-left":"5px", "font-weight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    }
                                </div>                             
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Loginpage;