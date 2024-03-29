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
  };

  const [reportingDate, setReportingDate] = React.useState("");
  const [regularVolume, setRegularVolume] = React.useState();
  const [regularPurchasePrice, setRegularPurchasePrice] = React.useState();
  const [regularSellPrice, setRegularSellPrice] = React.useState();
  const [mid_gradeVolume, setMid_GradeVolume] = React.useState();
  const [mid_gradePurchasePrice, setMid_GradePurchasePrice] = React.useState();
  const [mid_gradeSellPrice, setMid_GradeSellPrice] = React.useState();
  const [premiumVolume, setPremiumVolume] = React.useState();
  const [premiumPurchasePrice, setPremiumPurchasePrice] = React.useState();
  const [premiumSellPrice, setPremiumSellPrice] = React.useState();

  const salesEntry = {
    reportingDate: reportingDate,
    regularVolume: regularVolume,
    regularPurchasePrice: regularPurchasePrice,
    regularSellPrice: regularSellPrice,
    regularNetProfit: (regularSellPrice - regularPurchasePrice) * regularVolume,
    mid_gradeVolume: mid_gradeVolume,
    mid_gradePurchasePrice: mid_gradePurchasePrice,
    mid_gradeSellPrice: mid_gradeSellPrice,
    mid_gradeNetProfit: (mid_gradeSellPrice - mid_gradePurchasePrice) * mid_gradeVolume,
    premiumVolume: premiumVolume,
    premiumPurchasePrice: premiumPurchasePrice,
    premiumSellPrice: premiumSellPrice,
    premiumNetProfit: (premiumSellPrice - premiumPurchasePrice) * premiumVolume
  }

  const callApiaddSalesEntry = async () => {
    const url = serverURL + "/api/addSalesEntry";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(salesEntry),
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
            Daily Sales Entry
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item sm={10} style={{ display:"inline-grid" ,justifyItems: "center", marginLeft: 48}}>
                <TextField
                  id="date"
                  label="Reporting Date"
                  type="date"
                  defaultValue=""
                  // sx={{ width: 1000 }}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={reportingDate}
                  onChange={(e) => setReportingDate(e.target.value)}
                />
              </Grid>
              <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Volume"
                  label="Regular Volume (L)"
                  name="Volume"
                  value={regularVolume}
                  onChange={(e) => setRegularVolume(e.target.value)}
                />
              </Grid>

              <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Price"
                  label="Purchase Price (L)"
                  name="Price"
                  value={regularPurchasePrice}
                  onChange={(e) => setRegularPurchasePrice(e.target.value)}
                />
              </Grid>

              <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Price"
                  label="Sell Price (L)"
                  name="Price"
                  value={regularSellPrice}
                  onChange={(e) => setRegularSellPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}
                container
                direction="row"
              >
                <TextField
                  id="Volume"
                  label="Mid-Grade Volume (L)"
                  name="Volume"
                  value={mid_gradeVolume}
                  onChange={(e) => setMid_GradeVolume(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                  id="Price"
                  label="Purchase Price (L)"
                  name="Price"
                  value={mid_gradePurchasePrice}
                  onChange={(e) => setMid_GradePurchasePrice(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                  id="Price"
                  label="Sell Price (L)"
                  name="Price"
                  value={mid_gradeSellPrice}
                  onChange={(e) => setMid_GradeSellPrice(e.target.value)}
                />
              </Grid>
              <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Volume"
                  label="Supreme Volume (L)"
                  name="Volume"
                  value={premiumVolume}
                  onChange={(e) => setPremiumVolume(e.target.value)}
                />
                </Grid>
                <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Price"
                  label="Purchase Price (L)"
                  name="Price"
                  value={premiumPurchasePrice}
                  onChange={(e) => setPremiumPurchasePrice(e.target.value)}
                />
                </Grid>
                <Grid
                item xs={12} sm={4}
              >
                <TextField
                  id="Price"
                  label="Sell Price (L)"
                  name="Price"
                  value={premiumSellPrice}
                  onChange={(e) => setPremiumSellPrice(e.target.value)}
                />
              </Grid>
              <Grid
                item xs={12} sm={100}
              >
                <Button
                  type="Submit"
                  fullWidth
                  style = {{color:'white' , background: '#B00000'}}
                  variant="contained"
                  sx={{ mt: 1, mb: 2 }}
                  onClick={callApiaddSalesEntry}
                >Submit
                </Button>
              </Grid>


              <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </ThemeProvider>
  );
}