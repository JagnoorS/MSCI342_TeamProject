
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
  { x: '1/9/2022', y: 904.26 },
  { x: '2/9/2022', y: 294.03},
  { x: '3/9/2022', y:  282.39 },
  { x: '4/9/2022', y:  347.85},
  { x: '5/9/2022', y: 689.30 },
  {x: '6/9/2022', y:  720.49 },
  {x: '7/9/2022', y:  694.44 },
  {x: '8/9/2022', y: 714.11 },
  {x: '9/9/2022', y:  889.38 },
  {x: '10/9/2022', y:  609.61 },
  {x: '11/9/2022', y: 873.30 },
  {x: '12/9/2022', y:  161.36 },
  {x: '13/9/2022', y:  668.32 },
  {x: '14/9/2022', y:  1138.56},
  {x: '15/9/2022', y:  648.13 },
  {x: '16/9/2022', y:  603.85 },
  {x: '17/9/2022', y:  789.14 },
  {x: '18/9/2022', y:  889.42 },
  {x: '19/9/2022', y:  890.47 },
  {x: '20/9/2022', y:  1154.25},
  {x: '21/9/2022', y:  1318.05},
  {x: '22/9/2022', y:  408.80 },
  {x: '23/9/2022', y:  414.50 },
  { x: '24/9/2022', y: 732.73 },
  {x: '25/9/2022', y:  915.01},
  {x: '26/9/2022', y:  989.07 },
  {x: '27/9/2022', y:  769.30 },
  {x: '28/9/2022', y:  793.13},
  {x: '29/9/2022', y:  263.88},
  {x: '30/9/2022', y: 377.63 },
];
return (
  
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Regular Net Sales
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