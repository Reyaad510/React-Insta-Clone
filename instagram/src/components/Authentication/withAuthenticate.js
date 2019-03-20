import React, { Component} from "react";

const withAuthenticate = PostPage => LoginPage => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
          loggedIn: false
      }
    }

    componentDidMount() {
     let username = localStorage.getItem('username');
     if(typeof(username) === 'string') {
       return this.setState(prevState => {
           return {
               loggedIn: !prevState.loggedIn
           }
       })
     } else {
         return;
     }
    }

    render() {
      return (
        <div>
          {this.state.loggedIn === true ? <PostPage data={this.props.data} search={this.props.search} searchChangeHandler={this.searchChangeHandler} /> : <LoginPage /> }
        </div>
      );
    }
  };
};

export default withAuthenticate;
