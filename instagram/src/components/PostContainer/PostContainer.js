import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import styled, { css } from 'styled-components';


// Styled Components

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 10px;

  @media(max-width: 650px) {
    margin-top: 60px;
  }
`;

const TopPost = styled.div`
  display:flex;
  align-items: center;
  padding: 13px;


  img {
    border-radius: 100%;
    width: 40px;
    margin-right: 10px;
    cursor: pointer;
  }

  p {
    font-weight: bold;
    cursor: pointer;
  }
`;

const MidImg = styled.img`
  width: 100%;
`;

const LikeAndComment = styled.div`
  display: flex;
  height: 28px;
`;

const Likes = styled.div`
  padding-left: 15px;
  cursor: pointer;

  p {
    font-weight: bold;
    cursor: pointer;
  }
`;







class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      likes: props.data.likes,
      updated: false
    };
  }

  toggleLikes = () => {
    if (!this.state.updated) {
      this.setState(prevState => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }
  };

  render() {
    let red = this.state.updated ? "red" : null;
    return (
      <PostCard>
        <TopPost>
          <img
            src={this.state.data.thumbnailUrl}
            alt="img1"
          />
          <p>{this.state.data.username}</p>
        </TopPost>

        <MidImg src={this.state.data.imageUrl} alt="img2"></MidImg>

        <LikeAndComment>
          <p className={`${red}`} onClick={this.toggleLikes}>
            <i class="far fa-heart fa-lg" />
          </p>
          <p>
            <i class="far fa-comment fa-lg" />
          </p>
        </LikeAndComment>

        <Likes>
          <p>{this.state.likes} likes</p>
        </Likes>

        <div>
          <CommentSection comments={this.state.data.comments} />
        </div>
      </PostCard>
    );
  }
}

export default PostContainer;
