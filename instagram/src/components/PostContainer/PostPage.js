import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../ReusableStyles/Button";
import styled from "styled-components";

const DivCenter = styled.div`
  text-align: center;
  margin: 50px 0;
`;

const PostPage = props => {
  let filteredContacts = props.data.filter(data => {
    return (
      data.username.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
    );
  });
  return (
    <div>
      <SearchBar
        search={props.search}
        searchChangeHandler={props.searchChangeHandler}
      />
      {filteredContacts.map(data => {
        return <PostContainer data={data} key={data.username} />;
      })}
      <DivCenter>
        <Button onClick={props.logOut}> LogOut </Button>
      </DivCenter>
    </div>
  );
};

export default PostPage;
