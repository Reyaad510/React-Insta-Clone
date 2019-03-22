import React from "react";
import styled, { css } from 'styled-components';

// Styled Components

const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: whitesmoke;
  width: 100%;
  top: 0;  
`;

const SearchLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8%;


  @media(max-width: 650px){
    margin-left: 0%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  flex:1;
  padding-right: 10px;
  cursor: pointer;
`;

const Instagram = styled.div`
  padding-left: 10px;
  flex: 1;
  cursor: pointer;
  font-size: 40px;
  font-family: 'Cookie', cursive;
  line-height: 0;

  @media(max-width: 650px) {
    font-size: 30px;
  }
`;

const SearchMid = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 7%;
  flex: 1 1 100%;

  input {
    font-size: 16px;
    outline: none;
    width: 80%;

    @media(max-width: 650px) {
      width: 100%;
    }

    ::placeholder {
      text-align: center;
    }
  }
`;

const SearchRight = styled.div`
  display:flex;
  justify-content: center;
  flex: 1 1 60%;
`;



const SearchBar = (props) => {
  return (
    <SearchBarDiv>
      <SearchLeft>
        <Icon>
        <i class="fab fa-instagram fa-2x" />
      </Icon>
      <Instagram>
      <p> Instagram </p>
      </Instagram>
      </SearchLeft>
      <SearchMid>
        <input 
        value={props.search}
        onChange={props.searchChangeHandler}  
        placeholder="&#128269; Search" />
      </SearchMid>
      <SearchRight>
      <p>
        <i class="far fa-compass fa-lg" />
        </p>
        <p>
        <i class="far fa-heart fa-lg" />
        </p>
        <p>
        <i class="far fa-user fa-lg" />
        </p>
      </SearchRight>
    </SearchBarDiv>
  );
};

export default SearchBar;
