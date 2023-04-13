import { Alert, Grid, Paper,  } from '@mui/material'
import Button from '@mui/material/Button';
import { borderColor } from '@mui/system';
import React, { Component, useState } from 'react';
import { getStorage, ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import storage  from './index.js';
import { Redirect } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar.js';

export default function Al() {
    const paperStyle={padding:'20px',height:'110vh', width:800, margin:'20px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
     <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
      <Paper  elevation={10} style={paperStyle}> 
      <Grid  style={{"display":"inlineblock",height:'350px'}}>
      <div>
        <h1 style={{color:'#702963'}}>
        What is Active Listening? And how to Practice it? 
        </h1>
        </div>
        <div>
        <iframe width="600" height="300"
         src="https://www.youtube.com/embed/0nmJW_zExk0" 
        frameBorder="0" 
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </Grid>
      <Grid style={{display:'flex',height:'120px', width:'800px'}}>
        <div>
            <h2 style={{color:'#702963',textAlign:'left',marginTop:'30px'}}>
                Requirements:
            </h2>
            <h4>
                People Required: &nbsp; 2
            </h4>
            <h4>
            Time needed: &nbsp;15-30 minutes
            </h4>
            <h2 style={{color:'#702963',textAlign:'left'}}>
                How to practice it:
            </h2>
            <ul style={{color:'black',textAlign:'left'}}>
             <li >
             <li>
            <i>Have everyone in your group choose a topic they can speak about at a conversational level.</i>   
             </li>
            </li>
            <li>
           <i> Once topics are chosen, break the group into pairs and have them go off together. The first person takes their turn speaking about their topic. </i> 
            </li>
            <li>
           <i> The second person’s role is to listen intently to the story, stopping every so often to restate what the first person said, but in their own words. </i> 
            </li>
            </ul>
            <a href="https://www.ringcentral.com/us/en/blog/empathy-exercises/" target="_blank">Read More</a>
        </div>
        </Grid>
      </Paper>
    
    </Grid>
    </>
  )
}
