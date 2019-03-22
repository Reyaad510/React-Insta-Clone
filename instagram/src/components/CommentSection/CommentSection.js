import React, { Component } from "react";
import Comment from "../Comment.js/Comment";
import './CommentSection.css'
import styled, { css } from 'styled-components';



const Input = styled.input`
 
    width: 99%;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 16px;
    outline: none;
    border-top: 1px solid lightgray;
  
`;





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

  addNewComment = (event) => {
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
        <form onSubmit={this.addNewComment}>
          <Input 
          className="comment-input" 
          placeholder="Add Comment..."
          value={this.state.text}
          onChange={this.changeHandler}/>
        </form>
      </div>
    );
  }
}

export default CommentSection;
