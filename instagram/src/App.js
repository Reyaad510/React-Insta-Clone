import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostPage from "./components/PostContainer/PostPage";

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
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          searchChangeHandler={this.searchChangeHandler}
        />

        <PostPage data={this.state.dummyData} search={this.state.search} />
      </div>
    );
  }
}

export default App;
