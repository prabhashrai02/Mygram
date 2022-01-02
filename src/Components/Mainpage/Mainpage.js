import React, { Component } from 'react';
import '../Mainpage/Mainpage.css'
import Post from '../Post/Post';

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            postarray:[]
        }
    }

    componentDidMount(){
        this.getpost();
    }

    getpost=()=>{
        let data=[
            {
                "postid": "21132",
                "username": "sdkmg",
                "postimage": "https://m.media-amazon.com/images/I/615M3RtSQPL._AC_SX466_.jpg",
                "timestamp": "3151",
                "likes": "24543"
            },
            {
                "postid": "21132",
                "username": "sdkmg",
                "postimage": "https://m.media-amazon.com/images/I/615M3RtSQPL._AC_SX466_.jpg",
                "timestamp": "3151",
                "likes": "24543"
            },
            {
                "postid": "21132",
                "username": "sdkmg",
                "postimage": "https://m.media-amazon.com/images/I/615M3RtSQPL._AC_SX466_.jpg",
                "timestamp": "3151",
                "likes": "24543"
            },
            {
                "postid": "21132",
                "username": "sdkmg",
                "postimage": "https://m.media-amazon.com/images/I/615M3RtSQPL._AC_SX466_.jpg",
                "timestamp": "3151",
                "likes": "24543"
            },
            {
                "postid": "21132",
                "username": "sdkmg",
                "postimage": "https://i.redd.it/c23wstk4w3t61.jpg",
                "timestamp": "3151",
                "likes": "24543"
            }
        ]
        
        this.setState({postarray: data});
    }

    render() { 
        return (  
            <div>
                {
                    this.state.postarray.map((item, index)=>(
                        <Post id={item.postid} username={item.username} postimage={item.postimage} likes={item.likes}/>
                    ))
                }

            </div>
        );
    }
}
 
export default Mainpage;