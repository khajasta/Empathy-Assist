import { BrowserRouter , Router,Switch, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography, Stack, Button} from '@mui/material'
import {Link as RouterLink} from "react-router-dom";
import { fontSize } from "@mui/system";


function ResponsiveAppBar() {
  return (
    <AppBar style={{'backgroundColor':'#DA70D6','top':'0','left':'0',height:'60px'}} position='fixed' >
      <Toolbar>
      <img src={require("../images/original.png")} alt="" style={{"width":"60px", "height":"60px"}}/>
      <Typography variant="h5" component='div' sx={{flexGrow:1} } 
      style={{textAlign:'left',margin:'10px',color:'white'}}>
      <strong>Empathy Assist</strong>
      </Typography>
      <Stack direction='row' spacing={2}>
      <RouterLink to="/Home">
      <img src={require("../images/home.png")} alt="" style={{"width":"70px", "height":"70px"}}/>
        </RouterLink>
        <RouterLink to="/Create" >
        <img src={require("../images/behaviorone.jpg")} alt="" style={{"width":"70px", "height":"70px"}}/>
        </RouterLink>
        <RouterLink to="/Empathy" >
        <img src={require("../images/trainingone.png")} alt="" style={{"width":"50px", "height":"50px", marginTop:'10px'}}/>
        </RouterLink>
      </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default ResponsiveAppBar;