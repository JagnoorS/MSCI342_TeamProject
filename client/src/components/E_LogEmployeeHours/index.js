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
import history from "../Navigation/history"

const serverURL = ""; //enable for dev mode

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
  const [reportingDate, setReportingDate] = React.useState("");
  const [startTime, setStartTime] = React.useState();
  const [endTime, setEndTime] = React.useState();


  const employeeHours = {
    firstName: firstName,
    lastName: lastName,
    reportingDate: reportingDate,
    startTime: startTime,
    endTime: endTime,
    timeWorked: (endTime - startTime)
  }


  const callApiaddEmployeeHours = async () => {
    const url = serverURL + "/api/addEmployeeHours";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(employeeHours),
      headers: {
        'Content-Type': "application/json"
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
          <Typography component="h1" variant="h7">
            Hour Tracking Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
               <Grid>
                <TextField
                    id="date"
                    label="Date Worked"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={reportingDate}
                    onChange={(e) => setReportingDate(e.target.value)}
                    />
                </Grid>
                <Grid>
                <TextField
                    id = "time"
                    label = "Start Time"
                    type = "time"
                    defaultValue = "07:30"
                    InputLabelProps = {{
                    shrink: true,
                    }}
                    inputProps = {{
                      step: 300,
                    }}
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    />
                </Grid>
                <Grid>
                <TextField
                    id = "time"
                    label = "End Time"
                    type = "time"
                    defaultValue = "07:30"
                    InputLabelProps = {{
                    shrink: true,
                    }}
                    inputProps = {{
                      step: 300,
                    }}
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    />
                </Grid>
                <Typography component="h4" variant="h7">
                Total Hours worked Today: {endTime - startTime}
                </Typography>
            <Button
              type="Submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                callApiaddEmployeeHours();
                alert('Your Hours have been logged')
              }}
            >Submit
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
            </Box>
          </Box>
        <Copyright sx={{ mt: 32 }} />
      </Container>
    </ThemeProvider>
  );
}