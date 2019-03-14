import React from 'react';
import './PostContainer.css';

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

        </div>
    );
}

export default PostContainer;