
import React, {Component, useRef, useState} from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Typography, Link, Alert } from '@mui/material'

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
export default function Facial(props) {
  console.log(props.data)
  const paperStyle={padding:'20px',height:'98vh', width:800, margin:'0px auto', backgroundColor:'white', borderColor:'#D8BFD8'}

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Grid>
      <Paper  elevation={10} style={paperStyle}> 
      <Grid style={{display:'block',height:'350px', width:'800px'}} >
      <div>
      <h1 style={{color:'#702963'}}> Graphical Analysis</h1>
        <div style={{width:'500px',height:'500px', marginLeft:'150px'}} >
        <Bar
  datasetIdKey='id'
  data={{
    labels: ['Confidence Level of each Class'],
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
      },
    ],
  }}
/>
        </div>
        </div>
     
      </Grid>
      <Grid style={{display:'flex',height:'100px', width:'800px'}}>
        <div>
        <h2 style={{color:'#702963',textAlign:'left'}}>
                Analysis shows that:
            </h2>
     <ul style={{'color':'black','fontSize':'20px','textAlign':'left'}}>
         <li >
         <i> 	You create fearful environment in class. </i> 
         </li>
         <li>
         <i> 	Students feel demotivated in your class.</i>
         </li>
         <li>
         <i> 	You don’t behave fairly with the students.</i>  
         </li>
         <li>
         <i> It might be possible that you are hurting sentiments of students.</i>
         </li>
         <li>
         <i>Be more careful and more empathetic towards students.</i>
         </li>
     </ul>
     </div>
      </Grid>
    
      </Paper>
    </Grid>
    </>
  )
}
