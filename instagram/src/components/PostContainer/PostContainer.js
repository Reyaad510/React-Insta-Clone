import React, {Component} from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      likes: props.data.likes
    }
  }

  addLikes = () => {
   console.log(this.state.likes)
   this.setState(prevState => {
     return {
       likes: prevState.likes + 1
     }
   })
  }

  render() {
  return (
    <div className="post">
      <div className="top-post">
        <img className="imgUrl" src={this.state.data.thumbnailUrl} alt="img1" />
        <p className="bold">{this.state.data.username}</p>
      </div>
      <img className="mid-img" src={this.state.data.imageUrl} alt="img2" />

      <div onClick={this.addLikes}>
      <div className="like-comment-symbols">
        <p> 
          <i class="far fa-heart fa-lg" />
        </p>
        <p>
          <i class="far fa-comment fa-lg" />
        </p>
      </div>
      <div className="likes">
        <p className="bold">{this.state.likes} likes</p>
      </div>
      </div>

      <div>
        <CommentSection comments={this.state.data.comments} />
      </div>
    </div>
  );
};
}

export default PostContainer;