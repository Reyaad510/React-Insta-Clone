import React from "react";
import PostContainer from "./PostContainer";

const PostPage = props => {
  let filteredContacts = props.data.filter(data => {
    return (
      data.username.toLowerCase().indexOf(props.search.toLowerCase()) !==
      -1
    );
  });
  return (
    <div>
      {filteredContacts.map(data => {
        return <PostContainer data={data} key={data.username} />;
      })}
    </div>
  );
};

export default PostPage;
