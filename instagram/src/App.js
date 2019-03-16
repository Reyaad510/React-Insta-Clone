import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchData: [],
      search: ''

    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData })
  }

  searchChangeHandler = (event) => {
    this.setState({ search: event.target.value.substr(0,20) })
  }

 

 

  render() {
    let filteredContacts = this.state.dummyData.filter(data => {
      return data.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    return (
      <div className="App">
        <div className= "container">
        <SearchBar
         search={this.state.search}
         searchChangeHandler={this.searchChangeHandler} />

          {filteredContacts.map(data => {
            return <PostContainer 
            data={data} 
            key={data.username}
             />

          })}
       </div>
      </div>
    );
  }
}

export default App;
