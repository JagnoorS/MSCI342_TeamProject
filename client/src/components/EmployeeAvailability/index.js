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
    const [monday, setMonday] = React.useState();
    const [tuesday, setTuesday] = React.useState();
    const [wednesday, setWednesday] = React.useState();
    const [thursday, setThursday] = React.useState();
    const [friday, setFriday] = React.useState();
    const [saturday, setSaturday] = React.useState();
    const [sunday, setSunday] = React.useState();

  const availableHours = {
    firstName: firstName,
    lastName: lastName,
    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday,
    sunday: sunday
  }

 const callApiaddAvailableHours = async () => {
    const url = serverURL + "/api/addAvailableHours";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(availableHours),
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3">
            Log Availability
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography component="h3" variant="h7" align='center'>
            Please log your weekly availability
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}

                />
                </Grid>
            
            <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Monday"
                    required
                    fullWidth
                    placeholder="Monday"
                    variant="outlined"
                    value={monday}
                    onChange={(e) => setMonday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Tueasday"
                    required
                    fullWidth
                    placeholder="Tuesday"
                    variant="outlined"
                    value={tuesday}
                    onChange={(e) => setTuesday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Wednesday"
                    required
                    fullWidth
                    placeholder="Wednesday"
                    variant="outlined"
                    value={wednesday}
                    onChange={(e) => setWednesday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Thursday"
                    required
                    fullWidth
                    placeholder="Thursday"
                    variant="outlined"
                    value={thursday}
                    onChange={(e) => setThursday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Friday"
                    required
                    fullWidth
                    placeholder="Friday"
                    variant="outlined"
                    value={friday}
                    onChange={(e) => setFriday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Saturday"
                    required
                    fullWidth
                    placeholder="Saturday"
                    variant="outlined"
                    value={saturday}
                    onChange={(e) => setSaturday(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={100}>
                <TextField
                    id="standard-textarea"
                    label="Sunday"
                    required
                    fullWidth
                    placeholder="Sunday"
                    variant="outlined"
                    value={sunday}
                    onChange={(e) => setSunday(e.target.value)}
                />
                </Grid>
                <Grid
                item xs={12} sm={100}
              >
              <Button
                type="Submit"
                fullWidth
                variant="contained"
                sx={{ mt: 0, mb: 0 }}
                onClick={() => {
                  callApiaddAvailableHours();
                  alert('Your Availability has been logged!');
                }}
              >Submit
            </Button>
              </Grid>
                

            <Grid container justifyContent="flex-end">
            </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}