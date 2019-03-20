import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username:'',
      password:''
    };
  }

  inputChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', this.state.password);
     
     
  }



  render() {
    return (
      <form className='login'>
          <p> Instagram </p>
        <input
         name="username"
         value={this.state.username} placeholder="Username"
         className='login-input'
         onChange={this.inputChangeHandler} />

        <input 
        name="password"
        value={this.state.password} placeholder='Password' 
        className='login-input'
        onChange={this.inputChangeHandler} />
        
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
