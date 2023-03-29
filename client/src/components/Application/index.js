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
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [location, setLocation] = React.useState("");

  const application = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    province: province,
    zip: zip,
    phone: phone,
    email: email,
    dob: dob,
    location: location
  }
 
// const Locations = [
//   { label: 'Timmins'},
//   { label: 'Barrie' },
//   { label: 'Waterloo'}
// ];

  const callApiaddApplication = async () => {
    const url = serverURL + "/api/addApplication";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(application),
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
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography  component="h1" variant="h2">
            Application form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>

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
                  id="Address"
                  label="Address"
                  name="Address"
                  autoComplete="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  required
                  fullWidth
                  id="City"
                  label="City"
                  name="City"
                  autoFocus
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Province"
                  label="Province"
                  name="Province"
                  autoFocus
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  required
                  fullWidth
                  id="Zip"
                  label="Zip"
                  name="Zip"
                  autoFocus
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  required
                  fullWidth
                  id="Phone"
                  label="Phone"
                  name="Phone"
                  autoFocus
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
               <Grid item xs={12}>
                <TextField 
                    id="date"
                    label="Date of Birth"
                    type="date"
                    fullWidth
                    defaultValue=""
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                    fullWidth
                    variant = 'outlined'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                <MenuItem value={"Timmins"}>Timmins</MenuItem>
                <MenuItem value={"Barrie"}>Barrie</MenuItem>
                <MenuItem value={"Waterloo"}>Waterloo</MenuItem>
                </Select>
                </Grid>

                </Grid>

            <Button
              style = {{color:'white' , background: '#B00000'}}
              type="Submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                callApiaddApplication();
                alert('Your Application has been received!')
                window.location.reload()
              }}
            >Apply
              
              
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 0.1 }} />
      </Container>
    </ThemeProvider>
  );
}