
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
    labels: ['Emotions'],
    datasets: [
     
      {
        id: 1,
        label: 'Angry',
        data: [1],
        borderColor: 'blue',
      backgroundColor: '#8b0000',
      },
      {
        id: 2,
        label: 'Fear',
        data: [0],
        backgroundColor: '#EE4B2B',
      },
      {
        id: 1,
        label: 'Disgust',
        data: [0],
        backgroundColor: '#CD9A99',
      },
      {
        id: 2,
        label: 'Surprise',
        data: [0],
        backgroundColor: '#FFFF00',
      },
      {
        id: 1,
        label: 'Happy',
        data: [3],
        backgroundColor: 'green',
      },
      {
        id: 2,
        label: 'Sad',
        data: [0],
        backgroundColor: '#0000FF',
      },
      {
        id: 1,
        label: 'Neutral',
        data: [3105],
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
         <i> 	You neutral facial expressions reveal about your dry personality. </i> 
         </li>
         <li>
         <i> 	Students don't feel interested in your lectures, because of your constant expressions.</i>
         </li>
         <li>
         <i> You needs to improve and work on your facial gesture to improve class environment.</i>  
         </li>
         <li>
         <i> The class environment is neither motivating nor de-motivating for students.</i>
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
