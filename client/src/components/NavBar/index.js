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
import { createTheme } from '@mui/material/styles';



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


          <Button colors = "inherit" onClick= {()=> history.push('/')}>Home</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/EmployeeLanding')}>Employees</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/ManagerLanding')}>Managers</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/CustomerLanding')}>Customers</Button>
        


            
     
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
