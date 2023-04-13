import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Typography, Link } from '@mui/material'
import {Link as RouterLink} from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import submitClick from './index'
import {  useState } from 'react'
import { Redirect } from "react-router-dom";
export default function Signup() {
     
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [username,setUsername]=useState('');
    const [cnfrmpass,setCnfrmPass]=useState('');
    const paperStyle={padding:'20px',height:'80vh', width:300, margin:'0px auto', backgroundColor:'#D8BFD8'}
    const avatarStyle={backgroundColor:'#DA70D6'}
    const [loggedIn, setLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${"http://localhost:5000/api"}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ email, pass,username,cnfrmpass }),
      }).then(res => {
        console.log(res);
        return res.json();
      }).then(data => {
        console.log(data.status);
        if (data.status === 'success') {
          setLoggedIn(true);
        } else {
          alert('Please provide correct passwords to register')
        }
      }).catch(error => {
        console.error('Error:', error);
      });
    }
    if (loggedIn) {
      return <Redirect to="/Login" />;
    }
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}> 
        <Grid align='center'>
        <Avatar style={avatarStyle}><LoginIcon></LoginIcon></Avatar> 
        <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit} method='POST' action='api/auth/signup'>
        <TextField label='username' 
         placeholder='Enter email' 
        fullWidth required style={{"marginTop":"10px"}} id='username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)
            
        } ></TextField>
        <TextField label='email' 
         placeholder='Enter email' 
        fullWidth required style={{"marginTop":"10px"}} id='useremail' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)
        } >
        </TextField>
        <br />
        <TextField label='password'  
        placeholder='Enter password' 
        id='userpass' 
        type='password'  
       fullWidth required style={{"marginTop":"10px"}}
       value={pass}
       onChange={(e)=>setPass(e.target.value)}
        >
        </TextField>
        <TextField label='confirm password'
          placeholder='Enter password again' 
          value={cnfrmpass}
          type='password' 
          fullWidth required style={{"marginTop":"10px"}}
          onChange={(e)=>setCnfrmPass(e.target.value)}>
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
         variant='conatined'
          type='submit'
          fullWidth style={{'backgroundColor':'#DA70D6', marginBottom:'10px'}}      
        >
        Sign Up
        </Button>     
        </form>
       
        <Typography>
          <RouterLink to="/Login">
            Do you have an account?Sign In
          </RouterLink>
        </Typography>
        </Paper>
      </Grid>
      
    )
}
