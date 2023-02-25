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
               <Grid>
                <TextField
                    id="date"
                    label="Date Worked"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{
                    shrink: true,
                    }}
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
                    />
                </Grid>
                <Typography component="h4" variant="h7">
                Total Hours worked Today:
                </Typography>
            <Button
              type="Submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Submit
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
            </Box>
          </Box>
        <Copyright sx={{ mt: 50 }} />
      </Container>
    </ThemeProvider>
  );
}