import React, {Component, useRef, useState} from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Typography, Link, Alert } from '@mui/material'
import {Link as RouterLink} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const paperStyle={padding:'20px',height:'70vh', width:300, margin:'0px auto', backgroundColor:'#D8BFD8'}
  const avatarStyle={backgroundColor:'#DA70D6'}
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const localemail=useRef();
  const localpass=useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('EmailData',email);
    localStorage.setItem('PassData',pass);
    fetch(`${"http://localhost:5000/api"}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, pass }),
    }).then(res => {
      console.log(res);
      return res.json();
    }).then(data => {
      console.log(data.status);
      if (data.status === 'success') {
        setLoggedIn(true);
      } else {
        alert('Please provide correct credentials')
        console.log('incorrect')
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  if (loggedIn) {
    return <Redirect to="/Home" />;
  }
  return (
   
    <Grid>
      <Paper elevation={10} style={paperStyle}> 
      <Grid align='center'>
      <Avatar style={avatarStyle}><LoginIcon></LoginIcon></Avatar> 
      <h2>Sign In</h2>
      </Grid>
      <form onSubmit={handleSubmit} method='POST' action='api/auth/login'>
      <TextField label='email'  placeholder='Enter email' fullWidth required value={email} ref={localemail}
      onChange={(e)=>setEmail(e.target.value)} >
        </TextField>
      <br />
      <TextField label='password'  placeholder='Enter password'  type='password' fullWidth required 
      ref={localpass}
      style={{"marginTop":"10px"}}
      value={pass}
      onChange={(e)=>setPass(e.target.value)}>
      </TextField>
      <FormControlLabel 
      control={
        <Checkbox 
          name="checkedB"
          color="primary">
        </Checkbox>
      }
      label='Remember Me'
      ></FormControlLabel>
      
      <Button
       variant='conatined' type='submit' fullWidth style={{'backgroundColor':'#DA70D6', marginBottom:'10px'}}
      >
      Sign In
      </Button>
      
      </form>
      
      <Typography>
        <RouterLink to="/Signup" >
          Do you have an account?Sign Up
        </RouterLink>
      </Typography>
      </Paper>
    </Grid>
    
  )
}

export default LoginForm
