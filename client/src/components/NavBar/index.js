import * as React from 'react';
import { AppBar } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import history from '../Navigation/history';
import { Link } from "react-router-dom";




const NavigationBar = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>


          <Button colors = "inherit" onClick= {()=> history.push('/')}>Landing</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/ManagerLanding')}>Review</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/EmployeeLanding')}>Search</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/M_EmployeeLoggedHours')}>myPage</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/M_EmployeeLoggedHours')}>myPage</Button>
          


            
     
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       
 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
 
         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
