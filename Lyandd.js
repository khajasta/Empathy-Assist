import { Alert, Grid, Paper,  } from '@mui/material'
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.js';

export default function Lyandd() {
    const paperStyle={padding:'20px',height:'110vh', width:800, margin:'20px auto', backgroundColor:'white', borderColor:'#D8BFD8'}
    return (
      <>
      <ResponsiveAppBar></ResponsiveAppBar>
       <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
        <Paper  elevation={10} style={paperStyle}> 
        <Grid  style={{"display":"inlineblock",height:'350px'}}>
        <div>
          <h1 style={{color:'#702963'}}>
          Laural, Yanny, and the dress
          </h1>
          </div>
          <div>
          <iframe width="600" height="300"
           src="https://www.youtube.com/embed/Z9AbND6qsZo" 
          frameBorder="0" 
          allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Grid>
        <Grid style={{display:'flex',height:'120px', width:'800px'}}>
          <div>
              <h2 style={{color:'#702963',textAlign:'left'}}>
                  Requirements:
              </h2>
              <h4>
                  People Required: &nbsp; 2
              </h4>
              <h4>
              Time needed: &nbsp;10 minutes
              </h4>
              <h2 style={{color:'#702963',textAlign:'left'}}>
                  How to practice it:
              </h2>
              <ul style={{color:'black',textAlign:'left'}}>
               <li >
               <li>
              <i>Play the “Laural and Yanny” clip to the group.</i>   
               </li>
              </li>
              <li>
             <i> Ask them which name they hear. Put those who hear “Laural” on one side of the room and those in the “Yanny” camp on the other: </i> 
              </li>
              <li>
             <i> Then pair everyone with someone from the opposite camp. Have them listen to the clip together and talk about what makes them hear the name that they do. </i> 
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
