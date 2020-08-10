import React from 'react';
import './App.css';

import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
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
        <Button className="submitBtn" variant="contained">Log In</Button>
      </form>
    </div>
  );
}

export default App;
