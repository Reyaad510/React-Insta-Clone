import React from 'react';
import './Comment.css';

const Comment = props => {
   
    return (
        <div className='comment'>
        <span className='bold'>{props.comment.username}</span> {props.comment.text}
        </div>
    );
}

export default Comment;