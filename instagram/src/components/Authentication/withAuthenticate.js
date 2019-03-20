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
     let password = localStorage.getItem('password');

     if(typeof(username) === 'string' && username !== '' && typeof(password) === 'string' && password !== '') {
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
      localStorage.clear();
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
