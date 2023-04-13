import React, {Component, useRef, useState} from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Typography, Link, Alert } from '@mui/material'
import {Link as RouterLink} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';


export default function Empathy() {
    const paperStyle={padding:'20px',height:'98vh', width:800, margin:'0px auto', backgroundColor:'white'}

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Grid>
      <Paper  elevation={10} style={paperStyle}> 
      <Grid style={{display:'block',height:'350px', width:'800px'}} >
      <div>
        <h1 style={{color:'#702963'}}>
        What is Empathy? 
        </h1>
        </div>
        <div>
        <iframe width="600" height="300"
         src="https://www.youtube.com/embed/1Evwgu369Jw" frameBorder="0" 
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </Grid>
      <Grid style={{display:'flex',height:'100px', width:'800px'}}>
        <div>
            <h1 style={{float:'left',color:'#702963'}}>
                Empathy Exercises:
            </h1>
            <ul style={{textAlign:'left',fontSize:'20px'}}>
            <RouterLink to="/Al" style={{color:'#702963'}}>
                <li>Active Listening</li>
                </RouterLink>
                <br></br>
                <RouterLink to="/Twosides" style={{color:'#702963'}} >
                <li>Two sides to every story</li>
                </RouterLink>
                <br></br>
                <RouterLink to="/Bandw" style={{color:'#702963'}}>
                <li>Best and Worst</li>
                </RouterLink>
                <br></br>
                <RouterLink to="/Lyandd" style={{color:'#702963'}}>
                <li>Laural, Yanny and the dress</li>
                </RouterLink>
                {/* <RouterLink to="/Create" style={{color:'#702963'}} >
                <li>Step out of your comfort zone</li>
                </RouterLink>
                <RouterLink to="/Create" style={{color:'#702963'}}>
                <li>Examine your biases</li>
                </RouterLink> */}
            </ul>
        </div>
      </Grid>
    
      </Paper>
    </Grid>
    </>
  )
}
