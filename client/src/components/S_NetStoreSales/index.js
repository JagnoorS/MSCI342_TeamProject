
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
  { x: '1/9/2022', y: 336.47 },
  { x: '2/9/2022', y: 94.24},
  { x: '3/9/2022', y:  95.11 },
  { x: '4/9/2022', y: 101.60},
  { x: '5/9/2022', y: 232.64 },
  {x: '6/9/2022', y: 228.27},
  {x: '7/9/2022', y: 272.21},
  {x: '8/9/2022', y: 357.88},
  {x: '9/9/2022', y: 137.17},
  {x: '10/9/2022', y: 89.88},
  {x: '11/9/2022', y: 167.85 },
  {x: '12/9/2022', y: 41.92},
  {x: '13/9/2022', y: 283.53 },
  {x: '14/9/2022', y: 429.88},
  {x: '15/9/2022', y: 408.91},
  {x: '16/9/2022', y: 166.78 },
  {x: '17/9/2022', y: 134.03},
  {x: '18/9/2022', y: 166.39},
  {x: '19/9/2022', y:194.09},
  {x: '20/9/2022', y: 280.66},
  {x: '21/9/2022', y: 171.12},
  {x: '22/9/2022', y: 319.38},
  {x: '23/9/2022', y: 203.75},
  { x: '24/9/2022', y: 52.79},
  {x: '25/9/2022', y:  93.46},
  {x: '26/9/2022', y: 167.80},
  {x: '27/9/2022', y: 144.21},
  {x: '28/9/2022', y: 247.10},
  {x: '29/9/2022', y: 226.00},
  {x: '30/9/2022', y: 205.04 },


];
return (
  
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Net Store Sales
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