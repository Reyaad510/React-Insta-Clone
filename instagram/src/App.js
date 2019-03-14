import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <div className= "container">
        <SearchBar />
          {this.state.dummyData.map(data => {
            return <PostContainer data={data} key={data.username} />
          })}
        
       </div>
      </div>
    );
  }
}

export default App;
