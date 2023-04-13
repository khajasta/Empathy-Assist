
import { Alert, Grid, Paper,  } from '@mui/material'
import Button from '@mui/material/Button';
import { borderColor } from '@mui/system';
import React, { Component, useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
export default function Actions() {

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Grid>
        
      <Grid align='center' style={{"display":"inlineblock"}}>
      <img src={require("../images/purpleupload.png")} alt="Upload" style={{"width":"200px", "height":"200px"}}/>
      <br />
      <Button variant="contained" component="label" style={{"backgroundColor":"#D8BFD8",textDecorationColor:"ButtonShadow","width":"190px"}}>
        <input type="file" id="video" name="video"></input>
      </Button>
      <br />
      <br />
      <Button   type='submit'variant="contained" component="label" style={{"backgroundColor":"#D8BFD8","margin":"10px", "width":"190px",textDecorationColor:"ButtonShadow"}}>
        Upload
      </Button>
      </Grid>
      
    </Grid>
    </>
  )
}
