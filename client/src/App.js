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
      apiResponse: '',
    }
  }

  callApi() {
    fetch('http://localhost:9000/api')
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.apiResponse}</p>
        <form className="login-form" method="post" action="/api" noValidate autoComplete="off">
          <TextField required
            id="standard-required" 
            label="Login" 
          />
          <TextField required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button type="submit" className="submitBtn" variant="contained">Log In</Button>
        </form>
      </div>
    );
  }
}

export default App;
