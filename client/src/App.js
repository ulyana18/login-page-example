import React, { Component } from 'react';
import './App.css';

import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      loginValue: '',
      passwordValue: '', 
    }
    this.signUp = this.signUp.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  callApi() {
    fetch('http://localhost:9000/api/user/signup', {
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
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    // this.callApi();

  }

  signUp() {
    this.callApi();
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
        <form className="login-form" noValidate autoComplete="off">
          <TextField required
              id="standard-required" 
              label="Name" 
              onBlur={this.nameChange}  // the same func for onKeyDown.Enter  
          />
          <TextField required
            id="standard-required" 
            label="Email" 
            onBlur={this.emailChange} 
          />
          <TextField required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onBlur={this.passwordChange}
          />
          <Button onClick={this.signUp} className="signUpBtn" variant="contained">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default App;
