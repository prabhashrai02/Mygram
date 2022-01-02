import React, { Component } from 'react';
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import love from "../../../src/images/react.svg";
import comment from "../../../src/images/comment.svg";
import share from "../../../src/images/share.svg";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            commentlist:[]
        }
    }

    componentDidMount(){
        this.getcomments();
    }

    getcomments=()=>{
        let data=[
            {
                "username": "ASD",
                "commentid": "1",
                "timestamp": "12424",
                "description": "Comment 1"
            }
        ];

        this.setState({commentlist: data});
    }

    render() { 
        return (  
            <div>
                <div className="Post_container">
                    {/* Header */}
                    <div className="Post_header">
                        <Avatar className="Post_image" src={this.props.profileimage} />
                        <div className="Post_username">{this.props.username}</div>
                    </div>

                    {/* Post */}
                    <img src={this.props.postimage} width="550px"/>

                    {/* Analysis */}
                    <div className="Post_analysis">
                        <img src={love} className="Post_reactimage" />
                        <img src={comment} className="Post_reactimage" />
                        <img src={share} className="Post_reactimage" />
                    </div>

                    {/* Likes */}
                    <div className="Post_likecnt">
                        {this.props.likes} likes
                    </div>

                    {/* Comments */}
                    <div>
                        {
                            this.state.commentlist.map((item, index)=>(

                                <div className="Post_comment">{item.username}: {item.description}</div>
                            ))
                        }
                    </div>

                    <input text="text" className="Post_addcomment" placeholder="Add a comment..."/>

                </div>
            </div>
        );
    }
}
 
export default Post;