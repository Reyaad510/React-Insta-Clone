import React from 'react';
import Comment from '../Comment.js/Comment';
import './CommentSection.css'

const CommentSection = props => {

    return (
        <div>
          {props.comments.map(comment => {
              return <Comment comment={comment} />
          })}
          <div className="comment-input-box">
        <input className="comment-input" placeholder="Add Comment..."/>
        </div>
        </div>
    );
}

export default CommentSection;