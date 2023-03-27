import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../Firebase/context';
import { AuthProvider } from '../Firebase/context';
import { Link, useHistory } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        FuelFlex
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { Login } = useAuth();
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2">
            Login Page
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
{!currentUser && (<Button
              type="submit"
              fullWidth
              style = {{color:'white' , background: '#B00000'}}

              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={() => {
                alert("Login Successful")
                Login(email, password)
                history.push("/")
              }}
                
            >
              Sign In
            </Button>
            ) }

            
            <Grid container>
              <Grid item xs>
                <Link to="/PasswordForget" href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>


 {currentUser && (  <Button
                type="submit"
                
                style = {{color:'white' , background: 'black'}}
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 1 }}
  
                onClick={() => {
                  alert("Logout Successful")
                  logout()
                  window.location.reload()

                }}
                >
                  Sign Out
                </Button>) }


              

            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
        }