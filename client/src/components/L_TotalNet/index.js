
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
  { x: '1/9/2022', y: 1134.86 },
  { x: '2/9/2022', y: 407.94},
  { x: '3/9/2022', y:  413.79 },
  { x: '4/9/2022', y: 503.03},
  { x: '5/9/2022', y: 858.09 },
  {x: '6/9/2022', y:  129.22 },
  {x: '7/9/2022', y: 945.18},
  {x: '8/9/2022', y: 867.87 },
  {x: '9/9/2022', y:  934.61},
  {x: '10/9/2022', y:  982.70 },
  {x: '11/9/2022', y: 665.76 },
  {x: '12/9/2022', y: 947.64 },
  {x: '13/9/2022', y: 193.77 },
  {x: '14/9/2022', y:  727.75},
  {x: '15/9/2022', y: 2001.95 },
  {x: '16/9/2022', y: 1269.42 },
  {x: '17/9/2022', y: 1053.17},
  {x: '18/9/2022', y:  1023.31 },
  {x: '19/9/2022', y:  1449.10 },
  {x: '20/9/2022', y:  1721.84},
  {x: '21/9/2022', y:  487.63},
  {x: '22/9/2022', y: 157.57},
  {x: '23/9/2022', y:  524.39 },
  { x: '24/9/2022', y: 899.81},
  {x: '25/9/2022', y:  1136.97},
  {x: '26/9/2022', y: 1253.32 },
  {x: '27/9/2022', y: 986.20 },
  {x: '28/9/2022', y:  972.04},
  {x: '29/9/2022', y:  325.12},
  {x: '30/9/2022', y: 544.35 },

];
return (
  
    <Paper>
    <Typography component="h1" variant="h2" align = 'center'>
      Total Net Gas Sales
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