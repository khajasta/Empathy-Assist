import {  Grid, Paper,  } from '@mui/material'
import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.js';

export default function Bandw() {
    const paperStyle={padding:'20px',height:'106vh', width:800, margin:'20px auto', backgroundColor:'white'}
    return (
      <>
      <ResponsiveAppBar></ResponsiveAppBar>
       <Grid style={{'backgroundImage':'{require("../images/bg.jpg")}'}}>
        <Paper  elevation={10} style={paperStyle}> 
        <Grid  style={{"display":"block",height:'300px'}}>
        <div>
          </div>
          <div style={{marginRight:'30px'}}>
         <img src={require("../images/bestworst.jpg")} alt="Not found" style={{width:"400px" ,height:"310px",float:'left',marginRight:'10px'}}></img>
          </div>
          <div style={{marginLeft:'30px',marginTop:'35px'}}>
          <h1 style={{color:'#702963'}}>
           Best and Worst
          </h1>
              <p>
              <i>
              This activity encourages you to share both the good and the bad. In addition to highlighting challenges that an individual may need help with, it’s a great temperature check and does wonders for getting everyone on the same page.  
              </i>    
              </p>
              <h2 style={{color:'#702963',textAlign:'left'}}>
                  Requirements:
              </h2>
              <h4>
                  People Required: &nbsp; 3-10
              </h4>
              <h4>
              Time needed: &nbsp;5-30 minutes
              </h4>
              </div>
        </Grid>
        <Grid style={{display:'block',height:'120px', width:'800px'}}>
             <div>
              <h2 style={{color:'#702963',textAlign:'left'}}>
                  How to practice it:
              </h2>
              <ul style={{color:'black',textAlign:'left'}}>
               <li >
               <li>
              <i>Sit together to create a meeting.</i>   
               </li>
              </li>
              <li>
             <i> Discuss about the good and bad achievement.  </i> 
              </li>
              <li>
             <i> Every member share their opininos regarding the scenario.
               </i>
              </li>
              <li>
             <i> The discussion will highlight the cause of the action.
               </i>
              </li>
              </ul>
                        </div>
          <div>
              <h2 style={{color:'#702963',textAlign:'left'}}>
                  Why it works?
              </h2>
              <ul style={{color:'black',textAlign:'left'}}>
               <li >
               <li>
              <i>Sharing is caring. When teams can share both the good and the bad, they’re making others aware of the challenges they’re up against.</i>   
               </li>
              </li>
              <li>
             <i>  This may also highlight other challenges that team members may not have been aware of, too.  </i> 
              </li>
              <li>
             <i> In the end, it causes us to see things from a perspective that we may not have previously considered. 
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
