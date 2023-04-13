
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
        data: [4],
        borderColor: 'blue',
      backgroundColor: '#8b0000',
      },
      {
        id: 2,
        label: 'Fear',
        data: [3],
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
        data: [40],
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
        data: [3592],
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
         <i> 	Your positive facial expressions give an impression that you response with interest to the students. </i> 
         </li>
         <li>
         <i> Your expressions encourage students to ask questions.</i>
         </li>
         <li>
         <i> 	You create a positive environment in class.</i>  
         </li>
         <li>
         <i> Keep it up and you can train yourself for more better approach.</i>
         </li>
     </ul>
     </div>
      </Grid>
    
      </Paper>
    </Grid>
    </>
  )
}
