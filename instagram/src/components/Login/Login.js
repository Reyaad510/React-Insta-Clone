import React from "react";
import "./Login.css";
import styled from "styled-components";
import Button from '../ReusableStyles/Button';

// Styled Components

const LoginInput = styled.input`
  border: 0;
  padding: 12px 16px;
  margin: 8px;
  background: #fff;
  font-size: 1rem;
  width: 240px;
  border-radius: 0;
  outline: 0;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
`;






class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
  };

  render() {
    return (
      <form className="login">
        <p> Instagram </p>
        <LoginInput
          name="username"
          value={this.state.username}
          placeholder="Username"
          className="login-input"
          onChange={this.inputChangeHandler}
        />

        <LoginInput
          name="password"
          value={this.state.password}
          placeholder="Password"
          className="login-input"
          onChange={this.inputChangeHandler}
        />

        <Button onClick={this.login}>Login</Button>
      </form>
    );
  }
}

export default Login;

