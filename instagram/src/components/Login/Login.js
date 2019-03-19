import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value })
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
        
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
