import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
   
    return (
        <div className='comment'>
        <span className='bold'>{props.comment.username}</span> {props.comment.text}
        </div>
    );
}

export default Comment;

Comment.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
        })
    )
}