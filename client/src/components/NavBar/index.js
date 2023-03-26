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
import { AuthProvider, useAuth } from '../Firebase/context';


const serverURL = ""

const NavigationBar = () => {
  const { currentUser } = useAuth()

  const [role, getrole] = React.useState()
  

  const getRole = () => {
    callApigetRole()
      .then(res => {
        console.log("callApigetRole returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("callApigetRole parsed: ", parsed);
        getrole(parsed[0].role);
      })
  }

  React.useEffect(() => {
    getRole();
  }, [currentUser]);

  console.log("Navbar" + role)

  const callApigetRole = async () => {
    const url = serverURL + "/api/getRole";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify({
        userEmail: currentUser.email,
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  return (
    <AuthProvider>
    <AppBar position="static" style= {{backgroundColor:'#fd4463'}}>
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
          {role === "Manager" ? <Button colors = "inherit" onClick= {()=> history.push('/ManagerLanding')}>Managers</Button> :   <div></div> }
          {role === "Employee" ? <Button colors = "inherit" onClick= {()=> history.push('/EmployeeLanding')}>Employees</Button> : <div></div> }
          <Button colors = "inherit" onClick= {()=> history.push('/CustomerLanding')}>Customers</Button> 
          <Button colors = "inherit" onClick= {()=> history.push('/SignIn')}>Sign in</Button>
          <Button colors = "inherit" onClick= {()=> history.push('/ToggleDarkMode')}>Toggle Dark Mode</Button>
          {/* <Button colors = "inherit" onClick= {()=> (logout)}>Sign out</Button> */}
        


            
     
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       
 
          </Box>

          <Box sx={{ flexGrow: 0 }}>
 
         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </AuthProvider>
  );
};
export default NavigationBar;
