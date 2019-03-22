import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentDiv = styled.div`
  margin-bottom: 8px;
  padding-left: 15px;

  span {
    font-weight: bold;
    cursor: pointer;
  }
`;

const Comment = props => {
  return (
    <CommentDiv>
      <span>{props.comment.username}</span> {props.comment.text}
    </CommentDiv>
  );
};

export default Comment;

Comment.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      likes: PropTypes.number
    })
  )
};
