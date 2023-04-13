import { Grid, Paper,  } from '@mui/material'
import Button from '@mui/material/Button';
import React, { Component, useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
export default function Neutral() {
    const paperStyle={padding:'30px',height:'70%', width:'100%', margin:'10px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
  return (
    <>   
       <ResponsiveAppBar></ResponsiveAppBar>   
      <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
        <Paper  elevation={20} style={paperStyle}> 
        <Grid  style={{"display":"inlineblock"}}>
        <h1 style={{"color":"Purple"}}>Dominant Sentiment: Neutral </h1>
        <h2 style={{color:'#702963',textAlign:'left'}}> Confidence Level for each class:</h2>
        <div style={{width:'500px',height:'200px', marginLeft:'150px'}} >
        <Bar
  datasetIdKey='id'
  data={{
    labels: ['Classes'],
    datasets: [
     
      {
        id: 1,
        label: 'Negative',
        data: [0.92],
        borderColor: 'blue',
      backgroundColor: '#8b0000',
      },
     
      {
        id: 1,
        label: 'Positive',
        data: [0.81],
        backgroundColor: 'green',
      },
      {
        id: 1,
        label: 'Neutral',
        data: [0.82],
        backgroundColor: 'yellow'
      },
    ],
  }}
/>
        </div>
        
        {/* <img src={require("../images/neutral.jpg")} alt="Upload" style={{"width":"600px", "height":"300px"}}/> */}
        <h2 style={{"color":"Purple",'textAlign':'left'}}>Analysis shows that: </h2>
        <div>
        <ul style={{'color':'black','fontSize':'20px','textAlign':'left'}}>
            <li >
            <i> The class environment is neither motivating nor de-motivating for students. </i> 
            </li>
            <li>
            <i> You don’t show concern about student’s behavior in the class.</i>
            </li>
            <li>
            <i> You don’t hurt the sentiments of students.</i>  
            </li>
            <li>
            <i> You don’t appreciate the achievements of students.</i>
            </li>
            <li>
              <i>
              Try to be more empathetic in class so students feel motivated in your class
            </i>  
            </li>
        </ul>
        </div>  
        </Grid>
        </Paper>
      </Grid>
      </>
  )
}
