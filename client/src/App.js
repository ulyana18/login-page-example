import React, { Component } from 'react';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      loginValue: '',
      passwordValue: '', 
    }
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  callApi(method) {
    fetch(`http://localhost:9000/api/user/${method}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: {
            name: this.state.nameValue,
            email: this.state.emailValue,
            password: this.state.passwordValue,
          }
      }),})
      .then(res => res.json())
      .then(res => {
        window.localStorage.setItem('userName', res.user);
        window.localStorage.setItem('token', res.token);
      })
      .catch(err => {
        method === 'login' ? alert('Incorrect login or password') : alert('This email is already in use!');
      });
  }

  signUp() {
    this.callApi('signup');
  }
  logIn() {
    this.callApi('login');
  }

  nameChange(event) {
    this.setState({
      nameValue: event.target.value,
    });
  }
  emailChange(event) {
    this.setState({
      emailValue: event.target.value,
    });
  }
  passwordChange(event) {
    this.setState({
      passwordValue: event.target.value,
    });
  }


  render() {

    return (
      <div className="App">
        <div className="signup-container">
          <form className="signup-form" noValidate autoComplete="off">
            <TextField required
              id="standard-required" 
              label="Name" 
              onChange={this.nameChange}  
            />
            <TextField required
              id="standard-required" 
              label="Email" 
              onChange={this.emailChange} 
            />
            <TextField required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={this.passwordChange}
            />
            <Button 
              onClick={this.signUp} // the same function for onKeyDown.Enter
              className="signUpBtn" 
              variant="contained"
            >Sign Up</Button>
          </form>
        </div>
        <div className="login-container">
        <form className="login-form" noValidate autoComplete="off">
            <TextField required
              id="standard-required" 
              label="Email" 
              onChange={this.emailChange} 
            />
            <TextField required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={this.passwordChange}
            />
            <Button 
              onClick={this.logIn} // the same function for onKeyDown.Enter
              className="logInBtn" 
              variant="contained"
            >Log In</Button>
          </form>

        </div>
      </div>
    );
  }
}

export default App;
