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
 
const Type = [
  { label: 'Urgent'},
  { label: 'General' }
];

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

          <Typography  component="h1" variant="h7">
            Time Off Request Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Typography component="h2" variant="h5" align = 'left'>
                    
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
                //   value={firstName}
                //   onChange={(e) => setFirstName(e.target.value)}
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
                //   value={lastName}
                //   onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={100}>
              <TextField
                    id="date"
                    label="Start Date"
                    type="date"
                    defaultValue=""
                    fullWidth
                    InputLabelProps={{
                    shrink: true,
                    }}
                    // value={reportingDate}
                    // onChange={(e) => setReportingDate(e.target.value)}
                    />
              </Grid>

              <Grid item xs={12} sm={100}>
              <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    defaultValue=""
                    fullWidth
                    InputLabelProps={{
                    shrink: true,
                    }}
                    // value={reportingDate}
                    // onChange={(e) => setReportingDate(e.target.value)}
                    />
              </Grid>



              




    
             
            </Grid>

            <Button
              
              type="Submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={() => {
                callApiaddApplication();
                alert('Your announcement has been submitted')
              }}
            >Submit form
            </Button>



          </Box>
        </Box>

        <Copyright sx={{ mt: 0 }} />
      </Container>
    </ThemeProvider>
  );
}