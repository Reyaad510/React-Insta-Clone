import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {

    return (
        <div className="post">
            <div className='top-post'>
                <img className="imgUrl" src={props.data.thumbnailUrl} />
                <p className='bold'>{props.data.username}</p>
            </div>
            <img className="mid-img" src={props.data.imageUrl} />
    
            <div className='like-comment-symbols'>
                <p><i class="far fa-heart fa-lg"></i></p>
                <p><i class="far fa-comment fa-lg"></i></p>
            </div>
            <div className="likes">
                <p className='bold'>{props.data.likes} likes</p>
            </div>
            <div>
            <CommentSection comments={props.data.comments} />
            </div>

        </div>
    );
}

export default PostContainer;