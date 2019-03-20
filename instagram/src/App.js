import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
    
  }

  searchChangeHandler = event => {
    this.setState({ search: event.target.value.substr(0, 26) });
  };

  render() {
    // console.log(typeof(localStorage.getItem('username')) === 'string')
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          searchChangeHandler={this.searchChangeHandler}
        />

        <ComponentFromWithAuthenticate data={this.state.dummyData} search={this.state.search} />
       
      </div>
    );
  }
}

export default App;
