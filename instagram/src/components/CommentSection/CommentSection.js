import React, { Component } from 'react';
import Comment from '../Comment.js/Comment';
import './CommentSection.css'

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <Comment comment={comment} key={comment.text} />
                })}
                 <div className='comment-input-box'>
                    <input className='comment-input' placeholder="Add Comment..." />
                    </div>
            </div>
        );

  }
}

export default CommentSection;