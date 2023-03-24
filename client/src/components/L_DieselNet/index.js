
import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Title,
  
} from '@devexpress/dx-react-chart-material-ui';
import { Grid, Typography } from "@mui/material";
import { Animation } from "@devexpress/dx-react-chart";
import { Palette } from '@devexpress/dx-react-chart';
import { Tooltip } from '@devexpress/dx-react-chart-material-ui';
import history from "../Navigation/history"
import Button from '@mui/material/Button';

const App = () => {
  
const data = [
  { x: '1/9/2022', y: 73.02 },
  { x: '2/9/2022', y: 70.90},
  { x: '3/9/2022', y:  23.09 },
  { x: '4/9/2022', y: 91.98},
  { x: '5/9/2022', y: 56.75 },
  {x: '6/9/2022', y:  129.22 },
  {x: '7/9/2022', y: 72.69 },
  {x: '8/9/2022', y: 33.61 },
  {x: '9/9/2022', y:  26.93 },
  {x: '10/9/2022', y:  25.11 },
  {x: '11/9/2022', y: 9.66 },
  {x: '12/9/2022', y:  29.10 },
  {x: '13/9/2022', y: 13.10 },
  {x: '14/9/2022', y:  30.05},
  {x: '15/9/2022', y: 27.65 },
  {x: '16/9/2022', y: 109.42 },
  {x: '17/9/2022', y: 52.61},
  {x: '18/9/2022', y:  18.48 },
  {x: '19/9/2022', y:  42.08 },
  {x: '20/9/2022', y:  79.62},
  {x: '21/9/2022', y:  32.75},
  {x: '22/9/2022', y: 54.96},
  {x: '23/9/2022', y:  125.45 },
  { x: '24/9/2022', y: 168.68},
  {x: '25/9/2022', y:  105.47},
  {x: '26/9/2022', y: 161.38 },
  {x: '27/9/2022', y: 22.12 },
  {x: '28/9/2022', y:  89.91},
  {x: '29/9/2022', y:  73.90},
  {x: '30/9/2022', y: 44.89 },



];
return (
  
    <Paper>
      <Button variant="contained" style={{colour: '#000000', background: '#000000', marginRight: '30px'}} size='large' onClick= {()=> history.push('/GasDataLanding')}>Back</Button>
    <Typography component="h1" variant="h2" align = 'center'>
      Diesel Net Sales
      </Typography>
    <Chart
      data={data}
    >
      {/* <Palette scheme="Ocean"/> */}
      <ArgumentAxis />
      <ValueAxis/>
      
  
      <LineSeries valueField="y" argumentField="x" color = 'red'/>

      <Animation/>
      

    </Chart>

  </Paper>
  
);
}
  
export default App;