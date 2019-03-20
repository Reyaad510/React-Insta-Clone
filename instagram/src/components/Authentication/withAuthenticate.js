import React, { Component} from "react";
import './authen.css';

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

    logOut = () => {
      localStorage.removeItem('username');
      window.location.reload();
    }

    render() {
      return (
        <div>
          {this.state.loggedIn === true ? <PostPage logOut={this.logOut} data={this.props.data} search={this.props.search} searchChangeHandler={this.props.searchChangeHandler} /> : <LoginPage /> }
        </div>
      );
    }
  };
};

export default withAuthenticate;
