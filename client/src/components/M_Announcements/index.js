import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'



const serverURL = ""; //enable for dev mode
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        FuelFlex  
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");
  

  const announcement = {
    firstName: firstName,
    lastName: lastName,
    message: message,
    type: type
 
  }
 
  const callApiaddAnnouncement = async () => {
    const url = serverURL + "/api/addAnnouncement";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(announcement),
      headers:{
        'Content-Type':"application/json"
      }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }



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

          <Typography  component="h1" variant="h2">
            Post Announcements
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>

                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Enter your announcement here"
                    required
                    fullWidth
                    placeholder="Announcement"
                    multiline
                    maxRows={20}
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Grid item xs={12} sm ={100}>
                <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                    sx = {{mt : 2   }} 
                    label="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    //value={Type}
                    //onChange={(e) => setType(e.target.value)}
                >
                    <MenuItem value={'General'}>General</MenuItem>
                    <MenuItem value={'Urgent'}>Urgent</MenuItem>
                    {/* value={type}
                    onChange={(e) => setType(e.target.value)} */}

                </Select>
                </FormControl>
                  </Grid>
                </Grid>
            </Grid>
            <Button
              type="Submit"
              style = {{color:'white' , background: '#B00000'}}

              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={() => {
                callApiaddAnnouncement();
                alert('Your Announcement has been Submitted!')
              }}
            >Post Announcement
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </ThemeProvider>
  );
}