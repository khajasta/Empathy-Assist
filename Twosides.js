import {  Grid, Paper,  } from '@mui/material'
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.js';

export default function Twosides() {
    const paperStyle={padding:'20px',height:'106vh', width:800, margin:'20px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
     <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
      <Paper  elevation={10} style={paperStyle}> 
      <Grid  style={{"display":"block",height:'300px'}}>
      <div>
        </div>
        <div style={{marginRight:'30px'}}>
       <img src={require("../images/twosidesone.jpg")} alt="Not found" style={{width:"400px" ,height:"310px",float:'left',marginRight:'10px'}}></img>
        </div>
        <div style={{marginLeft:'30px',marginTop:'35px'}}>
        <h1 style={{color:'#702963'}}>
        Two Sides to Every Story
        </h1>
            <p>
            <i>
            The idea of this exercise is to try to defend some of the more unreasonable actions. 
            To do this, we have to truly put ourselves in the shoes of the person making the demand. 
            The goal isn’t necessarily to agree with what they’re asking but to begin understanding it. 
            </i>    
            </p>
            <h2 style={{color:'#702963',textAlign:'left'}}>
                Requirements:
            </h2>
            <h4>
                People Required: &nbsp; 2
            </h4>
            <h4>
            Time needed: &nbsp;15-30 minutes
            </h4>
            </div>
      </Grid>
      <Grid style={{display:'flex',height:'120px', width:'800px'}}>
           <div>
            <h2 style={{color:'#702963',textAlign:'left'}}>
                How to practice it:
            </h2>
            <ul style={{color:'black',textAlign:'left'}}>
             <li >
             <li>
            <i>Have everyone recall a time in which they felt someone was being unreasonable. Break the group into pairs.</i>   
             </li>
            </li>
            <li>
           <i> Start with one participant telling the story about the situation from their point of view. The other person is to listen closely (this is a great opportunity to use active listening skills if you’ve already completed that activity) and make mental note of the key details.  </i> 
            </li>
            <li>
           <i>The second person should try to imagine what the “irrational” person’s position was. As they’re hearing the story, try to imagine: 
             </i>
             <ul>
                <li>
               <i>Why the person was making this request</i> 
                </li>
                <li>
               <i>How they felt</i> 
                </li>
                <li>
               <i>What the impact of the situation was on them</i> 
                </li>
                </ul> 
            </li>
            <li>
                <i>
                When the story ends, the listener should attempt to play devil’s advocate and explain why they understand the “unreasonable” party’s position
                </i>
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
