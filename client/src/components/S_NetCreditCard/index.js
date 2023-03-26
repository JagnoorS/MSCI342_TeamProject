
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
  { x: '1/9/2022', y: 15238.37 },
  { x: '2/9/2022', y: 5317.75},
  { x: '3/9/2022', y:  4401.25 },
  { x: '4/9/2022', y: 6767.38},
  { x: '5/9/2022', y: 11016.25 },
  {x: '6/9/2022', y:  12739.19},
  {x: '7/9/2022', y: 11485.59},
  {x: '8/9/2022', y: 12984.31},
  {x: '9/9/2022', y: 6992.61},
  {x: '10/9/2022', y: 9684.45},
  {x: '11/9/2022', y:2286.86 },
  {x: '12/9/2022', y: 9709.97 },
  {x: '13/9/2022', y: 25671.01 },
  {x: '14/9/2022', y: 14124.98},
  {x: '15/9/2022', y: 7862.16 },
  {x: '16/9/2022', y: 8767.97 },
  {x: '17/9/2022', y: 9892.35},
  {x: '18/9/2022', y: 9867.75},
  {x: '19/9/2022', y: 13347.54},
  {x: '20/9/2022', y:  16940.56},
  {x: '21/9/2022', y: 5151.34},
  {x: '22/9/2022', y: 5215.66},
  {x: '23/9/2022', y: 8924.86},
  { x: '24/9/2022', y: 11824.83},
  {x: '25/9/2022', y:  14700.31},
  {x: '26/9/2022', y: 14552.45},
  {x: '27/9/2022', y: 4480.04},
  {x: '28/9/2022', y: 7036.96},
  {x: '29/9/2022', y: 14411.05},
  {x: '30/9/2022', y: 11124.51 },



];
return (
  
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Net Credit Card
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