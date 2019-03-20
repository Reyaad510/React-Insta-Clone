import React, { Component } from "react";
import Comment from "../Comment.js/Comment";
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: ''
    };
  }

  changeHandler = event => {
      this.setState({ text: event.target.value })
  }

  addNewComment = (event,index) => {
      event.preventDefault();
      this.setState(prevState => {
          return {
              comments: [...prevState.comments,
              {
                 text: prevState.text,
                 username: localStorage.getItem('username')
              }],
              text: ''
          }
      })
  }

 

  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return <Comment comment={comment} key={comment.text} />;
        })}
        <form onSubmit={this.addNewComment} className="comment-input-box">
          <input 
          className="comment-input" 
          placeholder="Add Comment..."
          value={this.state.text}
          onChange={this.changeHandler}  />
        </form>
      </div>
    );
  }
}

export default CommentSection;
