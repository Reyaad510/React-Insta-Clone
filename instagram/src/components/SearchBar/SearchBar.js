import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="search-left">
        <i class="fab fa-instagram fa-2x" />
      </div>
      <div className='instagram'>
      <p> Instagram </p>
      </div>
      <div className="search-mid">
        <input 
        value={props.search}
        onChange={props.searchChangeHandler}  
        placeholder="&#128269; Search" />
      </div>
      <div className="search-right">
        <i class="far fa-compass fa-lg" />
        <i class="far fa-heart fa-lg" />
        <i class="far fa-user fa-lg" />
      </div>
    </div>
  );
};

export default SearchBar;
