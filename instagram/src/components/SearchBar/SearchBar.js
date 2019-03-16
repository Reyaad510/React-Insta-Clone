import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="search-left">
        <div className='icon'>
        <i class="fab fa-instagram fa-2x" />
      </div>
      <div className='instagram'>
      <p> Instagram </p>
      </div>
      </div>
      <div className="search-mid">
        <input 
        value={props.search}
        onChange={props.searchChangeHandler}  
        placeholder="&#128269; Search" />
      </div>
      <div className="search-right">
      <p>
        <i class="far fa-compass fa-lg" />
        </p>
        <p>
        <i class="far fa-heart fa-lg" />
        </p>
        <p>
        <i class="far fa-user fa-lg" />
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
