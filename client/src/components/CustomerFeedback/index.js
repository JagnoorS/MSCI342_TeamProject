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
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'



const serverURL = ""; //enable for dev mode
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FuelFlex
      </Link>{' '}
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
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [comment, setComment] = React.useState("");

  const Feedback = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    location: location,
    comment: comment
    }

  const callApiaddFeedback = async () => {
    const url = serverURL + "/api/addFeedback";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(Feedback),
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
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h2" align = 'center'>
            Customer Feedback
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Typography component="h3" variant="h8" align  = 'center'>
            Input your information and your feedback
            </Typography>
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

                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Phone Number"
                  label="Phone Number"
                  name="Phone Number"
                  autoComplete="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}

                />
                </Grid>

                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="Email"
                  autoComplete="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                </Grid>


                <Grid item xs={12} sm ={100}>
                <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select
                    sx = {{mt : 0 }} 
                    required
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <MenuItem value={'Waterloo'}>Waterloo</MenuItem>
                    <MenuItem value={'Barrie'}>Barrie</MenuItem>
                    <MenuItem value={'Timmins'}>Timmins</MenuItem>
                </Select>
                </FormControl>
                </Grid>
            
            <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Enter your feedback here"
                    required
                    fullWidth
                    placeholder="Feedback"
                    multiline
                    maxRows={10}
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />




              <Button
              type="Submit"
              style = {{color:'white' , background: '#B00000'}}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              onClick={() => {
                callApiaddFeedback();
                alert('Your Feedback has been received');
                window.location.reload()
              }}
            >Submit Feedback
            </Button>
                </Grid>

            

            <Grid container justifyContent="flex-end">
            </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2}} />
      </Container>
    </ThemeProvider>
  );
}