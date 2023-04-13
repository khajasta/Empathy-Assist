import { Alert, Grid, Paper,  } from '@mui/material'
import Button from '@mui/material/Button';
import {Link as RouterLink} from "react-router-dom";
import { borderColor } from '@mui/system';
import React, { Component, useState } from 'react';
import { getStorage, ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import storage  from './index.js';
import { Redirect } from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar.js';
export default function Home() {
    const paperStyle={padding:'20px',height:'85vh', width:800, margin:'0px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
  return (
    <>
 <Grid>
   <Paper  elevation={10} style={paperStyle}> 
   <Grid style={{display:'inline-block', backgroundColor:'#D8BFD8',height:'150px', width:'800px'}} >
    <div > 
    <img src={require("../images/original.png")} alt="" style={{"width":"150px", "height":"150px",alignSelf:'left',marginRight:'10px',float:'left'}}/>
    </div>
    <div style={{alignItems:'center'}}>
    <h1 style={{color:'#702963'}}>
       <i style={{marginTop:'200px'}}>Empathy Assist</i> 
        </h1>
    </div>
    <div  style={{flexDirection:'column'}}>
    <i style={{color:'#AA336A',fontStyle:'italic'}}>
    <strong style={{fontSize:'20px'}}>
    A tool for empathetic training based on speech and facial gesture analysis.
    </strong> </i>
    </div>
   </Grid>
   <Grid style={{width:'800px'}}>
    <h1 style={{color:'#702963'}}>
        <i>
        What do you want?
        </i> </h1>
        <div style={{backgroundColor:'#D8BFD8',height:'15vh'}}>
        <RouterLink to="/Empathy" >
        <img src={require("../images/trainingone.png")} alt="" style={{"width":"90px", "height":"90px",float:'left'}} />
        <h2 style={{float:'left',color:'#702963'}}> 
            Empathy Training
            <br />
            <i style={{float:'left',color:'#AA336A',fontSize:'15px',marginLeft:'10px'}}> Learn and practice empathy exercises</i>
        </h2> 
        </RouterLink>
        </div>
        <br />
        <div style={{backgroundColor:'#D8BFD8',height:'15vh'}}>
        <RouterLink to="/Create" >
        <img src={require("../images/behaviorone.jpg")} alt="" style={{"width":"90px", "height":"90px",float:'left'}} />
        <h2 style={{float:'left',color:'#702963'}}> 
        Behavior Analysis
        <br />
     <i style={{float:'left',color:'#AA336A',fontSize:'15px',marginLeft:'10px'}}> Perform speech and facial gesture analysis.</i>
        </h2> 
        </RouterLink>
        </div>
        <div style={{height:'15vh', alignItems:'center'}}>
        <RouterLink to="/Login" >
        <Button variant='contained' style={{marginTop:'20px', backgroundColor:'#D8BFD8'}}>
        <img src={require("../images/logout.png")} alt="" style={{"width":"60px", "height":"60px"}} />
        </Button>
        </RouterLink>
        </div>
   </Grid>
 
   </Paper>
 </Grid>
 </>
  )
}
