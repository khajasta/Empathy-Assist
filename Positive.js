
import { Grid, Paper,  } from '@mui/material'
import Button from '@mui/material/Button';
import React, { Component, useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import storage from "./index.js";
import Create from './Create';
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
export default function Positive(props) {
  const getEmail = localStorage.getItem("EmailData");
    const paperStyle={padding:'30px',height:'99%', width:'60%', margin:'10px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
    const getvideoname = localStorage.getItem("localfilename");
    const url="E:/React/Flask/backend/"+getvideoname;
    return (
      <>   
       <ResponsiveAppBar></ResponsiveAppBar>   
      <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
        <Paper  elevation={20} style={paperStyle}> 
        <Grid  style={{"display":"block"}}>
        <h1 style={{"color":"Purple"}}>Dominant Sentiment: Positive </h1>
        {/* <iframe width="600" height="300"
         src={url}
         frameBorder="0" 
        allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        {/* <img src={require("../images/positiveone.jpg")} alt="Upload" style={{"width":"600px", "height":"300px"}}/> */}
        <div>
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
        </div>
        <h2 style={{"color":"Purple",'textAlign':'left'}}>Analysis shows that: </h2>
        <div>
        <ul style={{'color':'black','fontSize':'20px','textAlign':'left'}}>
            <li >
            <i> You observe tolerance and acceptance to your students. </i> 
            </li>
            <li>
            <i> You establish a positive climate of social interactions in classroom.</i>
            </li>
            <li>
            <i> You ought to feel care and concern in response to student’s positive and negative emotions.</i>  
            </li>
            <li>
            <i> You behave fairly with students and treat them equally without being affected by factors such as level of academic achievement or family background.</i>
            </li>
            <li>
           <i> Keep it up!!!</i>
            </li>
        </ul>
        </div>  
        </Grid>
        </Paper>
      </Grid>
      </>
    )
}
